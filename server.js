const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const authenticateUser = require('./middleware/authenticateUser');

const app = express();
const PORT = process.env.PORT || 5000;

// Connection URI
const uri = 'mongodb+srv://suprememal123:Waggeh12@mongopractice.bcgx2nd.mongodb.net/todo';

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());

// Routes with authentication middleware
app.use('/api/auth', authenticateUser, authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});