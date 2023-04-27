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

router.post('/', (req, res) => {
    fs.read('../db/db.json', 'utf-8', (err) => {
        if (err) {
            res.status(500).json({ msg: "Error reading db" });
        } else {
            const dataArr = JSON.parse(data);
            const newNote = {
                title: req.body.title,
                test: req.body.text,
            };
            dataArr.push(newNote);
            fs.writeFile('../db/db.json', JSON.stringify(dataArr, null, 4), (err) => {
                if (err) {
                    res.status(500).json({ msg: "Error writing db" });
                } else {
                    return res.json(newNote);
                }
            })
        }
    })
})