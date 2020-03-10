const express = require("express");
const multer = require("multer");

const Handyman = require("../models/handyman");

const router = express.Router();

const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
  };

const storage = multer.diskStorage({
    
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid mime type");
        if (isValid) {
          error = null;
        }    
        cb(error, "backend/images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname
                    .toLowerCase()
                    .split(" ")
                    .join("-");
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + "-" + Date.now() + "." + ext);
    }
});

router.post("",
  multer({ storage: storage}).single("img_url"),
  (req, res, next) => {
      const url = req.protocol + "://" + req.get("host");
      const handyman = new Handyman({
        name: req.body.name,
        dob: req.body.dob,
    
        img_url: url + "/images/" + req.file.filename,
        
        contactNumber: req.body.contactNumber,
        aadharNumber: req.body.aadharNumber,
        serviceName: req.body.serviceName,
        serviceExperience: req.body.serviceExperience,
        city: req.body.city,
        state: req.body.state,
        isVerified: req.body.isVerified,
        rating: req.body.rating,
        ratingNumber: req.body.ratingNumber
      });
      handyman.save().then(createdHandyman => {
          res.status(201).json({
              message: "Handyman Added Successfully",
              handyman: {
                  ...createdHandyman,
                  _id: createdHandyman._id
              }
          });
      })
      .catch(error => {
        console.log("Error = " + error);
      });
  }
);

router.put(
    "/:_id",
    multer({storage: storage}).single("img_url"),
    (req, res, next)=>{
        let img_url = req.body.img_url;
        if (req.file) {
          const url = req.protocol + "://" + req.get("host");
          img_url = url + "/images/" + req.file.filename
        }
        const handyman = {

            name: req.body.name,
            dob: req.body.dob,
        
            img_url: img_url,
            
            contactNumber: req.body.contactNumber,
            aadharNumber: req.body.aadharNumber,
            serviceName: req.body.serviceName,
            serviceExperience: req.body.serviceExperience,
            city: req.body.city,
            state: req.body.state,
            isVerified: req.body.isVerified,
            rating: req.body.rating,
            ratingNumber: req.body.ratingNumber    
        };
        console.log("handyman");
        console.log( req.params._id);
        console.log(handyman);
        Handyman.updateOne({ "_id" : req.params._id}, handyman)
                .then(result => {
                    console.log("updated");
                    console.log(result);                    
                    res.status(200).json({ message: "Update successful!" });
                })
                .catch(error=>{
                    console.log("Not updated");
                    console.log(error);
                    
                });
    
    }
)

router.get("", (req, res, next) => {
    Handyman.find().then(documents => {
        res.status(200).json({
            message: "Posts fetched successfully!",
            handymans: documents
        });
    });
});

router.delete("/:_id", (req, res, next) => {
    Handyman.deleteOne({ _id: req.params._id }).then(result => {
      console.log(result);
      res.status(200).json({ message: "Post deleted!" });
    });
});
  

module.exports = router;