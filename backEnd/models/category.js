const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

var Categories = mongoose.model('Category', categorySchema);

module.exports = Categories;