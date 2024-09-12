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
 * /api/department/addDepartment:
 *   post:
 *     summary: Add a new department
 *     tags: [Department]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Department created successfully
 *       '500':
 *         description: Internal server error
 */
router.post('/addMDI', creationofmdiController.addMDI);

/**
 * @swagger
 * /api/department/updateDepartment/{departmentId}:
 *   put:
 *     summary: Update an existing department
 *     tags: [Department]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: departmentId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the department to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Department updated successfully
 *       '404':
 *         description: Department not found
 *       '500':
 *         description: Internal server error
 */
router.put('/updateMDI/:id',  creationofmdiController.updateMDI);

/**
 * @swagger
 * /api/department/deleteDepartment/{departmentId}:
 *   delete:
 *     summary: Delete an existing department
 *     tags: [Department]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: departmentId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the department to delete
 *     responses:
 *       '200':
 *         description: Department deleted successfully
 *       '404':
 *         description: Department not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/deleteMDI/:id', creationofmdiController.deleteMDI);

/**
 * @swagger
 * /api/department/getAllDepartments:
 *   get:
 *     summary: Get all departments
 *     tags: [Department]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successfully retrieved departments
 *       '500':
 *         description: Internal server error
 */
router.get('/getAllMDIs', creationofmdiController.getAllMDIs);

/**
 * @swagger
 * /api/department/getAllDepartmentsForRegistration:
 *   get:
 *     summary: Get all departments For Registration
 *     tags: [Department]
 *     responses:
 *       '200':
 *         description: Successfully retrieved departments
 *       '500':
 *         description: Internal server error
 */
//router.get('/getAllDepartmentsForRegistration', departmentController.getAllDepartmentsForRegistration);


module.exports = router;