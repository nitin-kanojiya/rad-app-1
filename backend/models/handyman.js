const mongoose = require ('mongoose');
const handymanSchema = mongoose.Schema({
    isVerfied: {type: Boolean, required: true},
    fullname: {type: String, required: true},
    mobilenumber: {type: String, required: true},
    aadharnumber: {type: String, required: true},
    servicename: {type: String, required: true},
    distance: {type: String, required: true},
    dob: {type: String, required: true},
    experience: {type: String, required: true},
    currCity: {type: String, required: true},
    currState: {type: String, required: true}
});

module.exports = mongoose.model('Handyman', handymanSchema);