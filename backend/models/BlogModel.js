const {
    Schema,
    model
  } = require("mongoose");

  const BlogSchema = new Schema({
    title: {
      type: String,
      required: true,
      maxlength: 50
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    smallDescription:{
      type: String,
      required: true,
      maxlength:500
    },
    description:{
      type: String,
      required: true,
    },
    imagePath:{
      type: String,
    },
    isDefaultBlog:{
      type:Boolean
    }

  });
  
  const BlogModel = model("blog", BlogSchema)
  
  module.exports = BlogModel