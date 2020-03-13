
const mongoose = require("mongoose");
const express = require("express");

const Customer = require("../models/customer");

const router = express.Router();


var mongodb = 'mongodb+srv://mmudit:uMuiTl4JaM7RAvYn@cluster0-xcjvq.mongodb.net/rad-app?retryWrites=true&w=majority';
mongoose
.connect(mongodb)
.then(() => {
    console.log("Connected to database in customers");
})
.catch(() => {
    console.log("Connection Failed");
});

router.post("", function(req, res) {

      console.log(req.body);
      
      console.log(req.body.name);
      console.log(req.body.contactNumber);
      console.log(req.body.handymanId);
        
      const customerdata = new Customer({
        name: req.body.name,
        contactNumber: req.body.contactNumber,
        handymanId: req.body.handymanId
      });
      console.log(customerdata);
      
      customerdata.save().then(createdCustomer => {
          res.status(201).json({
              message: "Customer Added Successfully",
              inserted: true,
              createdCustomer: createdCustomer
          });
      })
      .catch(error => {
        console.log("Error = " + error);
      });
  }
);

router.get("", (req, res, next) => {
    Customer.find().then(documents => {
        res.status(200).json({
            message: "Posts fetched successfully!",
            customers: documents
        });
    });
});


module.exports = router;