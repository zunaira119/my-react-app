var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
},
  products:[{ 
    type: mongoose.Schema.Types.ObjectId,
      ref: "Products"
  }],
}, {
    timestamps: true
});
var Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;