const creationOfMDI = require('../models/creationOfMDI');
const { Sequelize, Op } = require('sequelize');

async function mdiIdExists(mdi_id) {
    const mdiIdExisting = await creationOfMDI.findOne({
        where: {
            mdi_id
        }
    });
    return mdiIdExisting !== null;
}
exports.addMDI = async(req, res) => {
    const {
        mdi_family_tree_id,
        document_no,
        rev_no,
        quantity_per_assembly,
        material_condition_form,
        material_standard,
        finish_surface_treatment,
        finish_standard,
        manufacturing_process,
        material_source,
        life_of_item,
        address,
        date_of_issue,
        document_path,
        document_name
    } = req.body;
    const createdBy = req.userId;
    let response = {};
    try {
        const creatingMDI = await creationOfMDI.create({

            mdi_family_tree_id,
            document_no,
            rev_no,
            quantity_per_assembly,
            material_condition_form,
            material_standard,
            finish_surface_treatment,
            finish_standard,
            manufacturing_process,
            material_source,
            life_of_item,
            address,
            date_of_issue,
            document_path,
            document_name,
            created_by: createdBy
        });
        response = { status: 1, message: "MDI created successfully", data: creatingMDI };
    } catch (error) {
        console.error("Error creating MDI : ", error);
        response = { status: 0, message: "Error creating MDI ", error: error.message };
    }
    res.json(response);
};
exports.getAllMDIs = async(req, res) => {
    try {
        const MDIs = await creationOfMDI.findAll({});

        res.json({ status: 1, message: 'MDIs retrieved successfully', data: MDIs });
    } catch (error) {
        console.error('Error fetching MDIs:', error);
        res.json({ status: 0, message: 'Error fetching MDIs', error: error.message });
    }
};
exports.updateMDI = async(req, res) => {
    const { id } = req.params;
    const {
        mdi_family_tree_id,
        document_no,
        rev_no,
        quantity_per_assembly,
        material_condition_form,
        material_standard,
        finish_surface_treatment,
        finish_standard,
        manufacturing_process,
        material_source,
        life_of_item,
        address,
        date_of_issue,
        document_path,
        document_name
    } = req.body;
    let response = {};

    try {
        const updateMDI = await creationOfMDI.findByPk(id);
        if (!updateMDI) {
            response = { status: 0, message: "MDI not found" };
        } else {
            const updatedBy = req.userId;
            await updateMDI.update({
                mdi_family_tree_id,
                document_no,
                rev_no,
                quantity_per_assembly,
                material_condition_form,
                material_standard,
                finish_surface_treatment,
                finish_standard,
                manufacturing_process,
                material_source,
                life_of_item,
                address,
                date_of_issue,
                document_path,
                document_name,
                updated_by: updatedBy
            });
            response = { status: 1, message: "MDI updated successfully", data: updateMDI };
        }
    } catch (error) {
        console.error("Error updating MDI: ", error);
        response = { status: 0, message: "Error updating MDI", error: error.message };
    }
    res.json(response);
};
exports.deleteMDI = async(req, res) => {
    const { id } = req.params;
    let response = {};
    try {
        const deleteMDI = await creationOfMDI.findByPk(id);
        if (!deleteMDI) {
            response = { status: 0, message: "MDI not found" };
        } else {
            await deleteMDI.destroy();
            response = { status: 1, message: "MDI deleted successfully", data: deleteMDI };
        }
    } catch (error) {
        console.error("Error deleting MDI: ", error);
        response = { status: 0, message: "Error deleting MDI", error: error.message };
    }
    res.json(response);
};