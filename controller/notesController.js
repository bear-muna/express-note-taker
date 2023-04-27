const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    fs.readFile('../db/db.json', 'utf-8', (err) => {
        if (err) {
            res.status(500).json({ msg: "Error reading db" });
        } else {
            const dataArr = JSON.parse(data);
            return res.json(dataArr);
        }
    })
});