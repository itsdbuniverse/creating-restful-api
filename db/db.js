const mongoose = require('mongoose')
require('../models/User')

const connectDb = () =>{

    const mongoUri = "mongodb://127.0.0.1:27017/testingPurpose"
    
    mongoose.connect(mongoUri).then(()=>{
        console.log("connected")
    })
}

module.exports = connectDb