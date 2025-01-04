const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Ensure the path is correct
const auth = require('../middleware/auth'); // Ensure the path is correct and file exists

router.post('/register', userController.register); // Ensure this route is defined
router.post('/login', userController.login);
router.get('/profile', auth, userController.getProfile);

module.exports = router;