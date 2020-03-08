var Handyman = require('./models/handyman');
var OurService = require('./models/ourservice');

var mongoose = require('mongoose');
var mongodb = 'mongodb+srv://mmudit:uMuiTl4JaM7RAvYn@cluster0-xcjvq.mongodb.net/rad-app?retryWrites=true&w=majority';

mongoose.connect(mongodb, { useNewUrlParser : true, useUnifiedTopology : true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log('hey');

var ourservices=[];
var handymans=[];

var createOurService=(name)=>{
    ourServicedetail ={ name : name };
    var ourservice = new Handyman(ourServicedetail);
    ourservice.save()
        .then(()=>{
            console.log("Inserted");
        })
        .catch(()=>{
            console.log("Error")
        });
}
createOurService("mittal");
console.log(ourservices);
