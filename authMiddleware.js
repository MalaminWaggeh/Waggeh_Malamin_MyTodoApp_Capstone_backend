const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Authorization token not provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.user;

    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authenticateUser;
