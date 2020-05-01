const mongoose = require('mongoose');

const ourServiceSchema = mongoose.Schema({
    name : { type : String, required : true }
});

module.exports = mongoose.model('SuggestedService', ourServiceSchema, 'suggestedService' );