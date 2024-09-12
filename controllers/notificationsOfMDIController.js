const mdiNotifications = require('../models/mdiNotifications');
const { Sequelize, Op } = require('sequelize');

async function mdiIdExists(mdi_id) {
    const mdiIdExisting = await mdiNotifications.findOne({
        where:  {
            mdi_id
        }
    });
    return mdiIdExisting !== null;
}
exports.addMDINotifications = async (req, res) => {
    const { mdi_id,current_stage, status, notification_message, user_id, notification_type, notify_user } = req.body;
    const createdBy = req.userId;
    let response = {};
    try {
        if (await mdiIdExists(mdi_id)) {
            response = { status: 0, message: "mdi_id is already exists" };
        } else {
            const notificationOfMDI = await mdiNotifications.create({ mdi_id,current_stage, status, notification_message, user_id, notification_type, notify_user , created_by:createdBy });
            response = { status: 1, message: "notificationOfMDI  created successfully", data: notificationOfMDI };
        }
    } catch (error) {
        console.error("Error creating notificationOfMDI : ", error);
        response = { status: 0, message: "Error creating notificationOfMDI ", error: error.message };
    }
    res.json(response);
};
exports.getAllMDINotifications = async (req, res) => {
    try {
        const getNotificationsOfMDI = await mdiNotifications.findAll({});

        res.json({ status: 1, message: 'mdiNotifications retrieved successfully', data: getNotificationsOfMDI });
    } catch (error) {
        console.error('Error fetching mdiNotifications:', error);
        res.json({ status: 0, message: 'Error fetching mdiNotifications', error: error.message });
    }
};
exports.updateMDINotifications = async (req, res) => {
    const { id } = req.params;
    const {  mdi_id,current_stage, status, notification_message, user_id, notification_type, notify_user } = req.body;
    let response = {};

    try {
        const updateNotificationsOfMDI = await mdiNotifications.findByPk(id);
        if (!updateNotificationsOfMDI) {
            response = { status: 0, message: "mdiNotifications not found" };
        } else {
            if (await mdiIdExists(mdi_id)) {
                response = { status: 0, message: "mdi_id with the same  id already exists" };
            } else {
                const updatedBy = req.userId;
                await updateNotificationsOfMDI.update({  mdi_id,current_stage, status, notification_message, user_id, notification_type, notify_user , updated_by:updatedBy });
                response = { status: 1, message: "mdiNotifications updated successfully",data:updateNotificationsOfMDI };
            }
        }
    } catch (error) {
        console.error("Error updating mdiNotifications: ", error);
        response = { status: 0, message: "Error updating mdiNotifications", error: error.message };
    }
    res.json(response);
};
exports.deleteMDINotifications = async (req, res) => {
    const { id } = req.params;
    let response = {};
    try {
        const deleteMDINotification = await mdiNotifications.findByPk(id);
        if (!deleteMDINotification) {
            response = { status: 0, message: "mdiNotifications not found" };
        } else {
            await deleteMDINotification.destroy();
            response = { status: 1, message: "mdiNotifications deleted successfully",data:deleteMDINotification };
        }
    } catch (error) {
        console.error("Error deleting mdiNotifications: ", error);
        response = { status: 0, message: "Error deleting mdiNotifications", error: error.message };
    }
    res.json(response);
};