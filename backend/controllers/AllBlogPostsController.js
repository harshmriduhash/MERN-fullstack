const mongoose = require('mongoose');
const Data = mongoose.model('Data');

exports.show=(req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, posts: data });
  });
};