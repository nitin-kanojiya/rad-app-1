
const mongoose = require("mongoose");
const express = require("express");

const Ourservice = require("../models/ourservice");

const router = express.Router();

router.get("", (req, res, next) => {
    Ourservice.find().then(documents => {
        res.status(200).json({
            documents
        });
    });
});

router.delete("delete-all", (req, res, next) => {
    Ourservice.deleteMany( function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
    });
});

module.exports = router;