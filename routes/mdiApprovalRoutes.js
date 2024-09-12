const express = require('express');
const mdiApprovalController = require('../controllers/mdiApprovalController');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.post('/addMDIApproval', mdiApprovalController.addMDIApproval);
router.get('/getAllMDIApprovals', mdiApprovalController.getAllMDIApprovals);
router.put('/updateMDIApproval/:id', mdiApprovalController.updateMDIApproval);
router.delete('/deleteMDIApproval/:id', mdiApprovalController.deleteMDIApproval);

module.exports = router;