const path = require("path");
const express = require("express");
const api = require("./backend/routes/api");

const app = express();
app.use(express.static(__dirname + '/angular-build/rad-app'));

app.use('/api',api);

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

