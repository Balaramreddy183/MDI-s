const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const creationOfMDI = require('./creationOfMDI'); // Import the creationOfMDI model

const MDIDrawings = sequelize.define('MDIDrawings', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    mdi_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
        references: {
            model: creationOfMDI, // Reference the creationOfMDI model
            key: 'mdi_id'
        }
    },
    mdi_family_tree_id: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    component_assembly_name: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    drawing_no: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    revision_no: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    sheet_size: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    no_of_sheets: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    drawing_id: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    drawing_name: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    drawing_file_path: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'mdi_drawings',
    timestamps: false,
    underscored: true
});
MDIDrawings.belongsTo(creationOfMDI, { as: 'creationOfMDI', foreignKey: 'mdi_id' });

module.exports = MDIDrawings;