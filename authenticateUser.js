const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authenticateUser");

router.get("/dashboard", authenticateUser, (req, res) => {
  res.json({ message: "Protected route accessed", user: req.user });
});

module.exports = router;
