var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var cartSchema = new Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
},
  products:[{ 
    type: mongoose.Schema.Types.ObjectId,
      ref: "Products"
  }],
  quantity:{
    type: Number,
    min:1,
    default:1
  },
  total:{
    type: Currency,
    default:0.0
  }
}, {
    timestamps: true
});
var Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;