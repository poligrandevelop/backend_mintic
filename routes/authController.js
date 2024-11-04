const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.addUser);
router.post('/login', authController.login);
router.get('/:id', authController.getAUser);
router.delete('/:id', authController.deleteUser);
router.get('/', authController.getUser);
router.patch('/:id', authController.updateUser);
router.put('/:id', authController.updateUserPut);


module.exports = router;
