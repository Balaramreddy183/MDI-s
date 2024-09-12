const express = require('express');
//const userRoutes = require('./routes/userRoutes'); // Example route file
const sequelize = require('./config/database');
const { specs, swaggerUi } = require('./swagger');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const sectionRoutes = require('./routes/sectionRoutes');
const locationRoutes = require('./routes/locationRoutes');
const assemblyRoutes = require('./routes/assemblyRoutes');
const componentRoutes = require('./routes/componentRoutes');
const labRoutes = require('./routes/labRoutes');
const documentCategoryRoutes = require('./routes/documentCategoryRoutes');
const variantRoutes = require('./routes/variantRoutes');
const permissionRoutes = require('./routes/permissionRoutes');
const rolesPermissionsRoutes = require('./routes/rolesPermissionsRoutes');
const localityRoutes = require('./routes/localityRoutes');
const cityRoutes = require('./routes/cityRoutes');
const subAssemblyRoutes = require('./routes/subAssemblyRoutes');
const programmeRoutes = require('./routes/programmeRoutes');
const technicalDirectorateRoutes = require('./routes/technicalDirectorateRoutes');
const systemRoutes = require('./routes/systemRoutes');
const projectRoutes = require('./routes/projectRoutes');
const projectDocumentRoutes = require('./routes/projectDocumentRoutes');
const systemDocumentRoutes = require('./routes/systemDocumentRoutes');
const userGroupRoutes = require('./routes/userGroupRoutes');
const itemHierarchyRoutes = require('./routes/itemHierarchyRoutes');
const designationRoutes = require('./routes/designationRoutes');
const projectCodeRoutes = require('./routes/projectCodeRoutes');
const itemDocumentRoutes = require('./routes/itemDocumentRoutes');
const supplyItemDetailsRoutes = require('./routes/supplyItemDetailsRoutes');
const supplyOrderDetailsRoutes = require('./routes/supplyOrderDetailsRoutes');
const supplyOrderSpecificTermsRoutes = require('./routes/supplyOrderSpecificTermsRoutes');
const creationofmdiController = require('./routes/creationOfMDIRoutes');
const mdiDrawingsController = require('./routes/mdiDrawingsRoutes');
const notificationOfMDIController=require('./routes/notificationsOfMDIRoutes')


const path = require('path');


const app = express();
const cors = require('cors');
// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Enable CORS
app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/role', roleRoutes);
app.use('/api/department', departmentRoutes);
app.use('/api/section', sectionRoutes);
app.use('/api/location', locationRoutes);
app.use('/api/assembly', assemblyRoutes);
app.use('/api/subAssembly', subAssemblyRoutes);

app.use('/api/component', componentRoutes);
app.use('/api/lab', labRoutes);
app.use('/api/documentCategory', documentCategoryRoutes);
app.use('/api/variant', variantRoutes);
app.use('/api/permission', permissionRoutes);
app.use('/api/rolePermission', rolesPermissionsRoutes);
app.use('/api/locality', localityRoutes);
app.use('/api/city', cityRoutes);
app.use('/api/programme', programmeRoutes);
app.use('/api/technicalDirectorate', technicalDirectorateRoutes);
app.use('/api/system', systemRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/projectDocument', projectDocumentRoutes);
app.use('/api/systemDocument', systemDocumentRoutes);
app.use('/api/userGroup', userGroupRoutes);
app.use('/api/itemHierarchy', itemHierarchyRoutes);
app.use('/api/designation', designationRoutes);
app.use('/api/projectCodes', projectCodeRoutes);
app.use('/api/itemDocuments', itemDocumentRoutes);
app.use('/api/itemDetails', supplyItemDetailsRoutes);
app.use('/api/supplyOrderDetails', supplyOrderDetailsRoutes);
app.use('/api/supplyOrderSpecificTerms', supplyOrderSpecificTermsRoutes);
app.use('/api/mdi', creationofmdiController);
app.use('/api/mdiDrawings', mdiDrawingsController);
app.use('/api/notificationsOfMDI',notificationOfMDIController)


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
