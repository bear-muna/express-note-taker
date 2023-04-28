// Util imports for main controller
const express = require('express');
const router = express.Router();
const path = require('path');

// Route for main html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route for notes html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Middleware for notes routes
const notesRoutes = require('./notesController');
router.use('/api/notes', notesRoutes);

module.exports = router;