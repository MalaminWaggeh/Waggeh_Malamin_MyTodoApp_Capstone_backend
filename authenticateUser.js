const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authenticateUser');

// Protected route example
router.get('/dashboard', authenticateUser, (req, res) => {
  // If the middleware successfully verifies the token, the user information will be attached to the request object (req.user)
  // You can access it as needed
  res.json({ message: 'Protected route accessed', user: req.user });
});

module.exports = router;
