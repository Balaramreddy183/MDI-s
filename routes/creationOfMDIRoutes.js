/**
 * @swagger
 * tags:
 *   name: Department
 *   description: API endpoints for Department
 * securityDefinitions:
 *   bearerAuth:
 *     type: http
 *     name: Authorization
 *     in: header
 */
const express = require('express');
const creationofmdiController = require('../controllers/creationOfMDIController');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

/**
 * @swagger
 * /api/mdi/addMDI:
 *   post:
 *     summary: Add a new MDI
 *     tags: [MDI]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mdi_family_tree_id:
 *                 type: string
 *               document_no:
 *                 type: string
 *               rev_no:
 *                 type: string
 *               quantity_per_assembly:
 *                 type: integer
 *               material_condition_form:
 *                 type: string
 *               material_standard:
 *                 type: string
 *               finish_surface_treatment:
 *                 type: string
 *               finish_standard:
 *                 type: string
 *               manufacturing_process:
 *                 type: string
 *               material_source:
 *                 type: string
 *               life_of_item:
 *                 type: integer
 *               address:
 *                 type: string
 *               date_of_issue:
 *                 type: string
 *                 format: date
 *               document_path:
 *                 type: string
 *               document_name:
 *                 type: string
 *     responses:
 *       '201':
 *         description: MDI created successfully
 *       '500':
 *         description: Internal server error
 */
router.post('/addMDI', creationofmdiController.addMDI);

/**
 * @swagger
 * /api/mdi/updateMDI/{id}:
 *   put:
 *     summary: Update an existing MDI
 *     tags: [MDI]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the MDI to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mdi_family_tree_id:
 *                 type: string
 *               document_no:
 *                 type: string
 *               rev_no:
 *                 type: string
 *               quantity_per_assembly:
 *                 type: integer
 *               material_condition_form:
 *                 type: string
 *               material_standard:
 *                 type: string
 *               finish_surface_treatment:
 *                 type: string
 *               finish_standard:
 *                 type: string
 *               manufacturing_process:
 *                 type: string
 *               material_source:
 *                 type: string
 *               life_of_item:
 *                 type: integer
 *               address:
 *                 type: string
 *               date_of_issue:
 *                 type: string
 *                 format: date
 *               document_path:
 *                 type: string
 *               document_name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: MDI updated successfully
 *       '404':
 *         description: MDI not found
 *       '500':
 *         description: Internal server error
 */
router.put('/updateMDI/:id', creationofmdiController.updateMDI);

/**
 * @swagger
 * /api/mdi/deleteMDI/{id}:
 *   delete:
 *     summary: Delete an existing MDI
 *     tags: [MDI]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the MDI to delete
 *     responses:
 *       '200':
 *         description: MDI deleted successfully
 *       '404':
 *         description: MDI not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/deleteMDI/:id', creationofmdiController.deleteMDI);

/**
 * @swagger
 * /api/mdi/getAllMDIs:
 *   get:
 *     summary: Get all MDIs
 *     tags: [MDI]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successfully retrieved MDIs
 *       '500':
 *         description: Internal server error
 */
router.get('/getAllMDIs', creationofmdiController.getAllMDIs);

module.exports = router;