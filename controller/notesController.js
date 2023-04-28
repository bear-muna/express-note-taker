const express = require('express');
const router = express.Router();
const fs = require('fs');
const uuid = require('uuid');

router.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ msg: "Error reading db" });
        } else {
            const dataArr = JSON.parse(data);
            return res.json(dataArr);
        }
    })
});

router.post('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ msg: "Error reading db" });
        } else {
            const postArr = JSON.parse(data);
            const newNote = {
                title: req.body.title,
                text: req.body.text,
                id: uuid.v4(),
            };
            postArr.push(newNote);
            fs.writeFile('./db/db.json', JSON.stringify(postArr, null, 4), (err) => {
                if (err) {
                    res.status(500).json({ msg: "Error writing db" });
                } else {
                    return res.json(newNote);
                }
            })
        }
    })
})

router.delete('/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ msg: "Error reading db" });
        } else {
            const deleteArr = JSON.parse(data);
            const noteSelect = req.params.id;
            console.log(`This is the note select: ${noteSelect}`);
            for (let i = 0; i < deleteArr.length; i++) {
                if (deleteArr[i].id == noteSelect) {
                    console.log("Working");
                    deleteArr.splice(i, 1);
                    fs.writeFile('./db/db.json', JSON.stringify(deleteArr, null, 4), (err) => {
                        if (err) {
                            res.status(500).json({ msg: "Error writing db" });
                        } else {
                            return res.json(deleteArr);
                        }
                    })
                } else {
                    res.status(404).json({ msg: "Cannot find note with id" })
                }
            }
        }
    })
})

module.exports = router;