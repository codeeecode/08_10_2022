var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render("index") //ten o view la index
})

router.get("/linknaocungduoc", (req, res) => {
    res.render("tennaocungduoc")
})


router.get("/api", (req, res) => {
    var data = {
        "name": "minh",
        "age": "20",
        "address": "Hn",

    }
    res.json(data)
})
module.exports = router;