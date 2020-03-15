const path = require("path");
const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Customer = require("./backend/models/customer");

var mongodb = 'mongodb+srv://mmudit:uMuiTl4JaM7RAvYn@cluster0-xcjvq.mongodb.net/rad-app?retryWrites=true&w=majority';
mongoose
.connect(mongodb)
.then(() => {
    console.log("Connected to database in server");
})
.catch(() => {
    console.log("Connection Failed");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

app.use(express.static(__dirname + '/angular-build/rad-app'));

const apihandy = require("./backend/routes/handymans");

app.use('/api/handymans',apihandy);
app.post('/api/customer',(req,res)=>{

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

});

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'angular-build/rad-app', 'index.html'))
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000)
    .once("listening", ()=>{
        console.log("started on http://localhost:3000 ");
    })
    .on("error", (err)=>{
        console.log("ERror "+ err);        
    });

// const app = require("./backend/app");
// const debug = require("debug")("node-angular");
// const http = require("http");

// const normalizePort = val => {
//   var port = parseInt(val, 10);

//   if (isNaN(port)) {
//     // named pipe
//     return val;
//   }

//   if (port >= 0) {
//     // port number
//     return port;
//   }

//   return false;
// };

// const onError = error => {
//   if (error.syscall !== "listen") {
//     throw error;
//   }
//   const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
//   switch (error.code) {
//     case "EACCES":
//       console.error(bind + " requires elevated privileges");
//       process.exit(1);
//       break;
//     case "EADDRINUSE":
//       console.error(bind + " is already in use");
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// };

// const onListening = () => {
//   const addr = server.address();
//   const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
//   debug("Listening on " + bind);
// };

// const port = normalizePort(process.env.PORT || 3000);
// app.set("port", port);

// const server = http.createServer(app);
// server.on("error", onError);
// server.on("listening", onListening);
// server.listen(port);
