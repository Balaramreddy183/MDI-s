const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const mdiNotifications = sequelize.define('mdiNotifications', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    mdi_id : {
        type: DataTypes.STRING(255),
        allowNull: false,
       
    },
    current_stage: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    status: {
        type: DataTypes.STRING(255),
       allowNull: true
    },
    notification_message: {
        type: DataTypes.TEXT(1000),
       allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    notification_type: {
        type: DataTypes.STRING(255),
       allowNull: true
    },
    notify_user: {
        type: DataTypes.TEXT(1000),
       allowNull: true
    }, 
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },   
    created_by: {
        type: DataTypes.INTEGER,
       allowNull:true
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    },
    updated_by: {
        type: DataTypes.INTEGER,
       allowNull:true
    }
}, {
    sequelize,
    tableName: 'mdi_notifications',
    timestamps: false, 
    underscored: true
});
   

module.exports = mdiNotifications;
