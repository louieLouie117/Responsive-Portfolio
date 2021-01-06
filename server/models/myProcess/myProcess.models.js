const mongoose = require("mongoose");


const MyProcessSchema = new mongoose.Schema(  { 

    title:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    summary:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    category:{
        type: String,
        // required: [true, "{PATH} is required"],
        // minlength: [3, "{PATH} must be at least {MINLENGTH}"]

    },

    likeCount: {
        default: 0,
        type:Number,
        }
    



 }, {timestamps: true } );

const MyProcess = mongoose.model("MyProcess", MyProcessSchema);

module.exports = MyProcess;