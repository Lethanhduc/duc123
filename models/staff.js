const mongoose = require('mongoose');

var StaffSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    MSNV: String,
    Name: String,
    urlImg: String,
    Information: String    
} , { collection: 'staff' } );

var Staff = mongoose.model('staff', StaffSchema);

module.exports = Staff;