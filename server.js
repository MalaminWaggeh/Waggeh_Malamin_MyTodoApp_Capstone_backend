const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);