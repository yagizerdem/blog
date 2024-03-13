const path = require('path')
const os = require('os');
require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const loadDevData = require("./Util/loadDevData");
const port = process.env.POR || 3000; // default port 3000
var useHttps = process.env.USE_HTTPS === 'true'
if(process.env.NODE_ENV == "production")  useHttps = 'true'


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.CONNECTIONSTRING.replace("<PASSWORD>", process.env.PASSWORD),
      {
        useNewUrlParser: true,
      }
    );
    const protocol = useHttps ? 'https' : 'http'; 
    const host = server.address().address;
    const port = server.address().port;
    const domain = `${protocol}://${host === '::' ? 'localhost' : host}:${port}`;
    
    // seed data
    if (process.env.NODE_ENV == "development" && process.argv[2] == "-load") {  
      loadDevData(domain);
    }
    if(process.env.NODE_ENV == "production"){
      loadDevData(domain);
    }
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};



var server = app.listen(port, () => {
  console.log(`Server started at port ${port} ... `);
  connectDB();
});
