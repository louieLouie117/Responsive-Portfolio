const port = 8000;
const dbName = "portfolio-db";
const cors = require("cors");
const express = require("express");
const fileUpload = require('express-fileupload');
const path = require('path');

require("./config/mongoose.config")(dbName);

const app = express();


app.use(express.json());
app.use(cors());
app.use(fileUpload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


require("./router/projects/projects.routes")(app);


app.listen(port), ()=>(
    console.log(`Listening on port ${port} for REQuest to RESpond to.`)
);