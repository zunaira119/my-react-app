const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contactUsSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

var ContactUs = mongoose.model('ContactUs', contactUsSchema);

module.exports = ContactUs;