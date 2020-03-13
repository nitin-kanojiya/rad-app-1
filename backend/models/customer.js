const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    handymanId: { type: String, required: true }
});

module.exports = mongoose.model('Customer', customerSchema, 'customer');