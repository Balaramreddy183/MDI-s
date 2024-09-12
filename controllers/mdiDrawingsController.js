const mdiDrawings = require('../models/mdi_drawings');
const { Sequelize, Op } = require('sequelize');

async function mdiIdExists(mdi_id) {
    const mdiIdExisting = await mdiDrawings.findOne({
        where:  {
            mdi_id
        }
    });
    return mdiIdExisting !== null;
}
exports.addMDIDrawings = async (req, res) => {
    const { mdi_id,mdi_family_tree_id, component_assembly_name, drawing_no, revision_no, sheet_size, no_of_sheets,drawing_id,drawing_name,drawing_file_path} = req.body;
    const createdBy = req.userId;
    let response = {};
    try {
        if (await mdiIdExists(mdi_id)) {
            response = { status: 0, message: "mdi_id is already exists" };
        } else {
            const creatingMDI = await mdiDrawings.create({  mdi_id,mdi_family_tree_id, component_assembly_name, drawing_no, revision_no, sheet_size, no_of_sheets,drawing_id,drawing_name,drawing_file_path, created_by:createdBy });
            response = { status: 1, message: "MDI is created successfully", data: creatingMDI };
        }
    } catch (error) {
        console.error("Error creating MDI : ", error);
        response = { status: 0, message: "Error creating MDI ", error: error.message };
    }
    res.json(response);
};
exports.getAllMDIDrawings = async (req, res) => {
    try {
        const MDIDrawings = await mdiDrawings.findAll({});

        res.json({ status: 1, message: 'MDIDrawings retrieved successfully', data: MDIDrawings });
    } catch (error) {
        console.error('Error fetching MDIDrawings:', error);
        res.json({ status: 0, message: 'Error fetching MDIDrawings', error: error.message });
    }
};
exports.updateMDIDrawings = async (req, res) => {
    const { id } = req.params;
    const { mdi_id,mdi_family_tree_id, component_assembly_name, drawing_no, revision_no, sheet_size, no_of_sheets,drawing_id,drawing_name,drawing_file_path} = req.body;
    let response = {};

    try {
        const MDIDrawings = await mdiDrawings.findByPk(id);
        if (!MDIDrawings) {
            response = { status: 0, message: "MDIDrawings not found" };
        } else {
            if (await mdiIdExists(mdi_id)) {
                response = { status: 0, message: "MDIDrawings with the same  id already exists" };
            } else {
                const updatedBy = req.userId;
                await MDIDrawings.update({  mdi_id,mdi_family_tree_id, component_assembly_name, drawing_no, revision_no, sheet_size, no_of_sheets,drawing_id,drawing_name,drawing_file_path , updated_by:updatedBy });
                response = { status: 1, message: "MDIDrawings updated successfully",data:MDIDrawings };
            }
        }
    } catch (error) {
        console.error("Error updating MDIDrawings: ", error);
        response = { status: 0, message: "Error updating MDIDrawings", error: error.message };
    }
    res.json(response);
};
exports.deleteMDIDrawings = async (req, res) => {
    const { id } = req.params;
    let response = {};
    try {
        const deleteMDIDrawing = await mdiDrawings.findByPk(id);
        if (!deleteMDIDrawing) {
            response = { status: 0, message: "MDIDrawing not found" };
        } else {
            await deleteMDIDrawing.destroy();
            response = { status: 1, message: "MDIDrawing deleted successfully",data:deleteMDIDrawing };
        }
    } catch (error) {
        console.error("Error deleting MDIDrawing: ", error);
        response = { status: 0, message: "Error deleting MDIDrawing", error: error.message };
    }
    res.json(response);
};