const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT, () => console.log(`🚀 Server running on port ${process.env.PORT}`));
  })
  .catch(err => console.log(err));
