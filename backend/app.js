const express = require('express')
var bodyParser = require('body-parser');
var multer = require('multer');
var cors = require('cors')

const ErrorHandler  = require('./middleware/ErrorHandler')

var upload = multer();
const app = express()
app.use(cors())

// parse data
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array()); 

const blogRouter = require('./routes/BlogRouter')

app.use(express.static('public'));
app.use('/blogs',blogRouter)
app.use(ErrorHandler)

module.exports = app