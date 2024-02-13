const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticateUser = require('../middleware/authMiddleware');

// Protected route that requires authentication middleware
router.get('/protected', authenticateUser, (req, res) => {
  // Access the authenticated user information from req.user
  res.json({ message: 'Protected route accessed', user: req.user });
});

module.exports = router;