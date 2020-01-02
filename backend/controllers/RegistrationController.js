const mongoose = require('mongoose');
const Registration = mongoose.model('Registration');
const { body, validationResult } = require('express-validator/check');

exports.validate=()=>{
  return [
      body('name')
        .isAlpha().withMessage('Invalid name.'),
      body('email')
        .isEmail().withMessage('Invalid email.'),
    ]
}

exports.createRegistration=(req,res,next)=>{
    const result = validationResult(req);
    if (result.isEmpty()) {
      const registration = new Registration(req.body);
      registration
      .save()
      .then(() => {
            return res.status(200).json({
            success:true,
            redirectUrl: '/blog-post'
          }) 
      })
      .catch(next);
    }
    else {
        let errors=result.mapped(), error_msg='';
        for(let key in errors) error_msg+=`${errors[key].msg} `;
        next(new Error(error_msg)); 
    }
    
}
    