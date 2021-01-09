const mongoose = require("mongoose");


const MyInfoSchema = new mongoose.Schema(  { 

    name:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },


    title: {
        type: String

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

    design: {
        type: String
    },

    education:{
        type: String,
       
    },

    educationLikes:{
        type: Number,
        default: 0
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