const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', auth, userController.logout);
router.post('/logoutAll', auth, userController.logoutAll);
router.get('/profile', auth, userController.getProfile);

module.exports = router;