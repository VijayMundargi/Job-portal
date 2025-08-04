require('dotenv').config();
const connectDb = require("./config/db.js");
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/authRouter.js');

const app = express();

//  CORS Middleware
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

//  Parse JSON request 
app.use(express.json());

// Global Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

//  Routes
app.use('/api/job', userRoutes);


const PORT = process.env.PORT || 4000;

//  Connect DB and start server
connectDb().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
});
