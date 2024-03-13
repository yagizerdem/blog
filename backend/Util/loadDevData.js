const path = require('path')
const blogModel = require('../models/BlogModel')
const fs = require('fs');
async function  loadDevData(hostpath){
    var count = await blogModel.countDocuments({})
    if(count > 0) return

    var result = fs.readFileSync('./Util/devData.json' , "utf8")
    var data = JSON.parse(result)

    var allRecords = []
    for(var key of Object.keys(data)){
        var imgpath =  (hostpath + "\\" + data[key].imagePath).replaceAll("\\","/")
        var model ={
            "title":data[key].title,
            "smallDescription":data[key].smallDescription,
            "description":data[key].description,
            "imagePath":imgpath,
            "isDefaultBlog":true
        } 
        allRecords.push(model)
    }
    result = await blogModel.insertMany(allRecords)

}

module.exports = loadDevData