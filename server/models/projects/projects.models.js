const mongoose = require("mongoose");


const ProjectSchema = new mongoose.Schema(  { 

    title:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    type:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    urlLink:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    linkType:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    color:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    file:{
        type: String,
        default: "no-photo.jpg"
    },

    details:{
        type: Boolean,

    },

    likeCount:{
        type:Number,
        default: 0
    }



 }, {timestamps: true } );

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;