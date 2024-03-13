const express = require('express')
const blogController = require('../Controllers/BlogController')
const asyncMiddleware = require('../middleware/asyncMiddleware')
const upload = require('../fileos')

const router = express.Router()
  

const singleUpload = (req ,res , next)=>{
  console.log("girdi")
  upload.single('imagePath')
  next()
};
// get all blogs

    router.route('/')
    .get(asyncMiddleware(blogController.getAllBlogs))
    .post(singleUpload,asyncMiddleware(blogController.createBlog))

        


    router.route('/:id')
    .get(asyncMiddleware(blogController.getBlogById))
    .patch(asyncMiddleware(blogController.updateBlogById))
    .delete(asyncMiddleware(blogController.deleteBlogById))

  module.exports = router