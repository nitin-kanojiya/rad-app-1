const mongoose = require ('mongoose');

const handymanSchema = mongoose.Schema({
    // serviceName: { type: Schema.Types.ObjectId , ref : 'OurService' },
    // isVerfied: { type: Boolean, default: false },
    // fullname: { type: String, required: true },
    // mobilenumber: { type: String, required: true },
    // aadharnumber: { type: String, required: true },
    // servicename: { type: String, required: true },
    // distance: { type: String, required: true },
    // experience: { type: String, required: true },
    // currCity: { type: String, required: true },
    // currState: { type: String, required: true }
    name: { type: String, required: true },
    dob: { type: String, required: true },

    img_url: { type: String, required: true },
    
    contactNumber: { type: String, required: true },
    aadharNumber: { type: String, required: true },
    serviceName: { type: String, required: true },
    serviceExperience: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },

    isVerified: { type: Boolean, required: true },
    rating: { type: Number, required: true },
    ratingNumber: { type: Number, required: true }

});

module.exports = mongoose.model('Handyman', handymanSchema, 'handyman');