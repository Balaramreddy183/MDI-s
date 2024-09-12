const express = require('express');
const sequelize = require('./config/database');
const { specs, swaggerUi } = require('./swagger');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// Import routes
const creationofmdiController = require('./routes/creationOfMDIRoutes');
const mdiDrawingsController = require('./routes/mdiDrawingsRoutes');
const notificationOfMDIController = require('./routes/notificationsOfMDIRoutes');
const mdiApprovalRoutes = require('./routes/mdiApprovalRoutes');

const app = express();

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Enable CORS
app.use(cors());

app.use(bodyParser.json());
app.use(express.json());

app.use('/api/mdi', creationofmdiController);
app.use('/api/mdiDrawings', mdiDrawingsController);
app.use('/api/notificationsOfMDI', notificationOfMDIController);
app.use('/api/mdiApproval', mdiApprovalRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

    // Check if the database connection is successful
    sequelize.authenticate()
        .then(() => {
            console.log('Database connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
});

// Close database connection on process exit
process.on('exit', () => {
    sequelize.close();
});