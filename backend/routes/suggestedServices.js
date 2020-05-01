
const mongoose = require("mongoose");
const express = require("express");

const SuggestedService = require("../models/suggestedService");

const router = express.Router();

router.post("", function(req, res) {
        
    const data = new SuggestedService({
      name: req.body.name,
    });

    data.save().then(doc => {
        res.status(201).json({
            message: "Suggestion Added Successfully",
        });
    })
    .catch(error => {
      console.log("Error = " + error);
    });

});

router.get("", (req, res) =>{
    SuggestedService.find().then(doc => {
        res.status(200).json(doc);
        // console.log(doc);
    })
    .catch(err =>{
        console.log(err);
    })
});

module.exports = router;