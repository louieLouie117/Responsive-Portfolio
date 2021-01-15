const port = 8000;
const dbName = "portfolio-db";
// const cors = require("cors");
// const express = require("express");
const fileUpload = require('express-fileupload');
const path = require('path');


require("dotenv").config();


const express = require("express"),
  cookieParser = require("cookie-parser"),
  cors = require("cors");

require("./config/mongoose.config")(dbName);

const app = express();


app.use(express.json());
// app.use(cors());
app.use(fileUpload());

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


require("./router/projects/projects.routes")(app);
require("./router/myProcess/myProcess.rotes")(app);
require("./router/myInfo/myInfo.routes")(app);
require("./router/user.routes")(app);



app.listen(port), ()=>(
    console.log(`Listening on port ${port} for REQuest to RESpond to.`)
);