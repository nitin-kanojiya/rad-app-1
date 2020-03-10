const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const handymansRoutes = require("./routes/handymans");
const app=express();

var mongodb = 'mongodb+srv://mmudit:uMuiTl4JaM7RAvYn@cluster0-xcjvq.mongodb.net/rad-app?retryWrites=true&w=majority';
mongoose
    .connect(mongodb)
    .then(() => {
        console.log("Connected to database");        
    })
    .catch(() => {
        console.log("Connection Failed");
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    console.log("Next doing");
    next();
});

app.use("/api/handymans", handymansRoutes);

module.exports = app;

  
// var ourservices=[];
// var handymans=[];

// var createOurService=(name)=>{
//     ourServicedetail ={ name : name };
//     var ourservice = new Handyman(ourServicedetail);
//     ourservice.save()
//         .then(()=>{
//             console.log("Inserted");
//         })
//         .catch(()=>{
//             console.log("Error")
//         });
// }
// createOurService("mittal");
// console.log(ourservices);
