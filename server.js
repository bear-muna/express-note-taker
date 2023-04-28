// Server template
// Server imports
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to use public folder as path for html
app.use(express.static('public'));

// Middleware to read json files coming from client
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware for modularizing routes
const allRoutes = require('./controller');
app.use(allRoutes);

// Listening for available ports
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));