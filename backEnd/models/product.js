const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    discription:{
        type:String
    },
    featured:{
        type:Boolean,
        default:false
    },
    status:{
        type:String
    },
    salePrice:{
        type:Currency,
        min:0
    },
    size:{
        type:Array
    }
}, {
    timestamps: true
});

var Products = mongoose.model('Products', productSchema);

module.exports = Products;