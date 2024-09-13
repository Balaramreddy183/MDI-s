const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const creationOfMDI = sequelize.define('creationOfMDI', {
    mdi_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    mdi_family_tree_id: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    document_no: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    rev_no: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    quantity_per_assembly: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    material_condition_form: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    material_standard: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    finish_surface_treatment: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    finish_standard: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    manufacturing_process: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    material_source: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    life_of_item: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    address: {
        type: DataTypes.TEXT(1000),
        allowNull: true
    },
    date_of_issue: {
        type: DataTypes.DATE,
        allowNull: true
    },
    document_path: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    document_name: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'creation_of_mdi',
    timestamps: false,
    underscored: true
});

module.exports = creationOfMDI;