const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MDIApproval = sequelize.define('MDIApproval', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    mdi_id: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    mdi_family_tree_id: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Pending', 'Reviewed', 'Approved', 'Issue Authorized'),
        allowNull: false,
        defaultValue: 'Pending'
    },
    remarks: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    prepared_by: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    reviewed_by: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    approved_by: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    issued_by: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    created_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    reviewed_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    approved_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    issued_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    workflow_stage: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'mdi_approval',
    timestamps: false,
    underscored: true
});

module.exports = MDIApproval;