const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Welcome to your backend server!');
});

// server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});