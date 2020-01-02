const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const data = new Schema({
  title:{
        type:String,
        required:true
  },

  text:{
        type:String,
        required:true
  }
});

module.exports = mongoose.model("Data", data);
