const path = require('path')
const BlogModel = require('../models/BlogModel')
const blogModel = require('../models/BlogModel')


async function getAllBlogs(req ,res){
    var isDefault = req.query.default; // $_GET["id"]
    console.log(isDefault)
    try{
        const {id} = req.params
        if(isDefault != undefined){

            var result = await BlogModel.find({isDefaultBlog:true}) 
        }else{

            var result = await BlogModel.find() 
        }

        res.json({
            status:'success',
            data:result
        })
    }catch(error){
        next(error)
    }
}
async function getBlogById(req , res , next){
    try{
        const {id} = req.params
        var result = await BlogModel.findById(id + '') 

        res.json({
            status:'success',
            data:result
        })
    }catch(error){
        next(error)
    }
}
async function createBlog(req ,res , next){
    var obj = {...req.body}
    obj.imagePath = req.file?.path; // Path to the uploaded image file



    var record = new BlogModel(obj)
    try{
        var result = await record.save()

        res.json({
            status:'success',
            data:result
        })
    }catch(error){
        console.log(error)
        next(error)
    }

}
async function updateBlogById(req ,res){
    try{
        var result = await BlogModel.findByIdAndUpdate(req.body.id , req.body)

        res.json({
            status:'success',
        })
    }catch(error){
        next(error)
    }

}
async function deleteBlogById(req ,res){
    try{
        var result = await BlogModel.findByIdAndDelete(req.params.id)
        res.json({
            status:'success',
            result:result
        })
    }catch(error){
        next(error)
    }
}
async function getDefaultBlog(req ,res){
    try{
        var result = await BlogModel.find({'isDefaultBlog':true}) 

        res.json({
            status:'success',
            data:result
        })
    }catch(error){
        next(error)
    }
}

module.exports = {getAllBlogs , getBlogById ,createBlog , updateBlogById , deleteBlogById , getDefaultBlog}