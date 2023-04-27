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
            const dataArr = JSON.parse(data);
            const newNote = {
                title: req.body.title,
                text: req.body.text,
                id: uuid.v4(),
            };
            dataArr.push(newNote);
            fs.writeFile('./db/db.json', JSON.stringify(dataArr, null, 4), (err) => {
                if (err) {
                    res.status(500).json({ msg: "Error writing db" });
                } else {
                    return res.json(newNote);
                }
            })
        }
    })
})

// // TODO: Create a delete note function
// router.delete('/:id', (req, res) => {
//     fs.readFile('./db/db.json', 'utf-8', (err, data) => {
//         if (err) {
//             res.status(500).json({ msg: "Error reading db" });
//         } else {
//             const dataArr = JSON.parse(data);
//             const noteSelect = req.params.id;
//             console.log(noteSelect);
//             for (let i = 0; i < dataArr.length; i++) {
//                 if (dataArr[i].id) {
//                     console.log(dataArr[i].id);
//                 }
//             }
//             for (let i = 0; i < dataArr.length; i++) {
//                 if (dataArr[i].id === noteSelect) {
//                     console.log("Working");
//                     // dataArr.splice(i, 1);
//                     // fs.writeFile('./db/db.json', JSON.stringify(dataArr, null, 4), (err) => {
//                     //     if (err) {
//                     //         res.status(500).json({ msg: "Error writing db" });
//                     //     } else {
//                     //         return;
//                     //     }
//                     // })
//                 } else {
//                     res.status(404).json({ msg: "Cannot find note with id" })
//                 }
//             }
//         }
//     })
// })

module.exports = router;