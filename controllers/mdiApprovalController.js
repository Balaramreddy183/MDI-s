const MDIApproval = require('../models/mdiApproval');

exports.addMDIApproval = async(req, res) => {
    const { mdi_id, mdi_family_tree_id, level, status, remarks, prepared_by, reviewed_by, approved_by, issued_by, reviewed_date, approved_date, issued_date, workflow_stage } = req.body;
    let response = {};
    try {
        const newApproval = await MDIApproval.create({ mdi_id, mdi_family_tree_id, level, status, remarks, prepared_by, reviewed_by, approved_by, issued_by, reviewed_date, approved_date, issued_date, workflow_stage });
        response = { status: 1, message: "MDI Approval created successfully", data: newApproval };
    } catch (error) {
        console.error("Error creating MDI Approval: ", error);
        response = { status: 0, message: "Error creating MDI Approval", error: error.message };
    }
    res.json(response);
};

exports.getAllMDIApprovals = async(req, res) => {
    try {
        const approvals = await MDIApproval.findAll({});
        res.json({ status: 1, message: 'MDI Approvals retrieved successfully', data: approvals });
    } catch (error) {
        console.error('Error fetching MDI Approvals:', error);
        res.json({ status: 0, message: 'Error fetching MDI Approvals', error: error.message });
    }
};

exports.updateMDIApproval = async(req, res) => {
    const { id } = req.params;
    const { mdi_id, mdi_family_tree_id, level, status, remarks, prepared_by, reviewed_by, approved_by, issued_by, reviewed_date, approved_date, issued_date, workflow_stage } = req.body;
    let response = {};

    try {
        const approval = await MDIApproval.findByPk(id);
        if (!approval) {
            response = { status: 0, message: "MDI Approval not found" };
        } else {
            await approval.update({ mdi_id, mdi_family_tree_id, level, status, remarks, prepared_by, reviewed_by, approved_by, issued_by, reviewed_date, approved_date, issued_date, workflow_stage });
            response = { status: 1, message: "MDI Approval updated successfully", data: approval };
        }
    } catch (error) {
        console.error("Error updating MDI Approval: ", error);
        response = { status: 0, message: "Error updating MDI Approval", error: error.message };
    }
    res.json(response);
};

exports.deleteMDIApproval = async(req, res) => {
    const { id } = req.params;
    let response = {};
    try {
        const approval = await MDIApproval.findByPk(id);
        if (!approval) {
            response = { status: 0, message: "MDI Approval not found" };
        } else {
            await approval.destroy();
            response = { status: 1, message: "MDI Approval deleted successfully", data: approval };
        }
    } catch (error) {
        console.error("Error deleting MDI Approval: ", error);
        response = { status: 0, message: "Error deleting MDI Approval", error: error.message };
    }
    res.json(response);
};