const mongoose = require("mongoose");


const MyInfoSchema = new mongoose.Schema(  { 

    name:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    slogan:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    specification:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    myStory:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    languages:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    frameworksLibraries:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    database:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    versionControl:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    file:{
        type: String,
        default: "no-photo.jpg"
    },


    likeCount: {
        default: 0,
        type:Number,
        },


    like:{
        type: Boolean
    }    



 }, {timestamps: true } );

const MyInfo = mongoose.model("MyInfo", MyInfoSchema);

module.exports = MyInfo;