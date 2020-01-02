const path = require('path');
const express = require('express');
const router = express.Router();
const controllers=require('../controllers/controllers');

router.get('/', controllers.show);
router.post('/sign-up',controllers.registrationValidate(),controllers.createRegistration);
router.post('/blog-post', controllers.blogPostValidate(),controllers.createBlogPost);
router.post('/update-blog-post', controllers.updateBlogPost);
router.delete('/delele-blog-post', controllers.deleteBlogPost);

module.exports = router;
