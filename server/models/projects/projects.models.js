const mongoose = require("mongoose");


const ProjectSchema = new mongoose.Schema(  { 

    name:{
        type: String,
        max: 250
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    title:{
        type: String,
        max: 250
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    type:{
        type: String,
        max: 250
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    urlLink:{
        type: String,
        max: 250
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    linkType:{
        type: String,
        max: 250

        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    color:{
        type: String,
        max: 250
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    file:{
        type: String,
        default: "no-photo.jpg"
    },

    details:{
        type: Boolean,
        default: false
    },

    likeCount:{
        type:Number,
        default: 0
    },

    like:{
        type: Boolean,
        default: false
    },

    easterEgg: {
        type: Number
    },

    easterEggMsg: {
        type:String,
        max: 250

    }





 }, {timestamps: true } );

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;