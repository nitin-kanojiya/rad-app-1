const mongoose = require('mongoose');

const ourServiceSchema = mongoose.Schema({
    name : { type : String, required : true },
    icon : { type : String, required : true },
    desc : { type : String, required : true },
    // synonyms : [{ type : String, required : true }],
    img_url : { type : String, required : true },
    // hanyman_list : [{ type : Schema.Types.ObjectId, ref : 'Handyman' }]

});

module.exports = mongoose.model('OurService', ourServiceSchema, 'ourservice' );