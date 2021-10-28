var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var favoritesSchema = new Schema({
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
var Favorite = mongoose.model('Favorite', favoritesSchema);

module.exports = Favorite;