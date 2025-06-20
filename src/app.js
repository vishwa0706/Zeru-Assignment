require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const restakerRoutes = require('./routes/restakerRoutes');
const validatorRoutes = require('./routes/validatorRoutes');
const rewardRoutes = require('./routes/rewardRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/restakers', restakerRoutes);
app.use('/validators', validatorRoutes);
app.use('/rewards', rewardRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error('MongoDB connection error:', err));