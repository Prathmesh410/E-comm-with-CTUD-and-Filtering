const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        // trim : true,
        // required : true,
        maxlength : 50

    },
    email : {
        type : String,
        // trim : true,
        // required : true,
        maxlength : 50

    },
    password : {
        type : String,
        // trim : true,
        // required : true,
        maxlength : 50

    },
})

module.exports = mongoose.model("Users",userSchema);