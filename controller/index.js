const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const notesRoutes = require('./notesController');
router.use('/api/notes', notesRoutes);

module.exports = router;