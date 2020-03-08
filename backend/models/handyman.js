const mongoose = require ('mongoose');

const handymanSchema = mongoose.Schema({
    // serviceName: { type: Schema.Types.ObjectId , ref : 'OurService' },
    // isVerfied: { type: Boolean, default: false },
    // fullname: { type: String, required: true },
    // mobilenumber: { type: String, required: true },
    // aadharnumber: { type: String, required: true },
    // servicename: { type: String, required: true },
    // distance: { type: String, required: true },
    // dob: { type: Date, required: true },
    // experience: { type: String, required: true },
    // currCity: { type: String, required: true },
    // currState: { type: String, required: true }
    name: String
});

module.exports = mongoose.model('Handyman', handymanSchema, 'handyman');