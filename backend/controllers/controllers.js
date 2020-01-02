const RegistrationController=require('./RegistrationController'),
      BlogPostController=require('./BlogPostController'),
      AllBlogPostsController=require('./AllBlogPostsController'),
      UpdateBlogPostController=require('./UpdateBlogPostController'),
      DeleteBlogPostController=require('./DeleteBlogPostController');

const  controllers={
        show:AllBlogPostsController.show,
        registrationValidate:RegistrationController.validate,
        createRegistration:RegistrationController.createRegistration,
        blogPostValidate:BlogPostController.validate,
        createBlogPost:BlogPostController.createBlogPost,
        updateBlogPost:UpdateBlogPostController.updateBlogPost,
        deleteBlogPost:DeleteBlogPostController.deleteBlogPost
};

module.exports ={
        show:AllBlogPostsController.show,
        registrationValidate:RegistrationController.validate,
        createRegistration:RegistrationController.createRegistration,
        blogPostValidate:BlogPostController.validate,
        createBlogPost:BlogPostController.createBlogPost,
        updateBlogPost:UpdateBlogPostController.updateBlogPost,
        deleteBlogPost:DeleteBlogPostController.deleteBlogPost
};
