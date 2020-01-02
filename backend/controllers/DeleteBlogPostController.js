const mongoose = require('mongoose');
const Data = mongoose.model('Data');

exports.deleteBlogPost=(req,res,next) => {
   const { id } = req.body;
   if(mongoose.Types.ObjectId.isValid(id)) {
        Data.findByIdAndRemove({_id: id})
           .then( docs => res.json({ success: true }))
           .catch( err =>next(new Error("Can\'t delete a record.")))
    }
    else next(new Error("Please provide correct Id"));

};