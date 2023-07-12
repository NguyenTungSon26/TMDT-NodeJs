const mongoose = require("mongoose")

module.exports = ()=>{
    mongoose.connect("mongodb://localhost:27017/mobile_shop")
    return mongoose
}