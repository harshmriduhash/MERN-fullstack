const mongoose = require('mongoose');
const Data = mongoose.model('Data');

exports.updateBlogPost=(req,res,next) => {
    const { id, updated } = req.body;
    Data.findByIdAndUpdate(id, updated, err=>{
        if (err) next(new Error('Can\'t update blog post'));
        return res.json({ success: true });
    });
};