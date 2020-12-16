const Project = require("../../models/projects/projects.models");


module.exports = {
// CRUD operations

    // Create 
    create (req, res){

    
        // Get file information  
        let fileInfo = req.files.file;
        console.log("File Information", fileInfo);
        // console.log("what info is here:", fileInfo.name);
    
        // Check if a file has bee selected by user
        if (!fileInfo || Object.keys(fileInfo).length === 0) {
            return res.status(400).send('please select an image.');
          }    
          
        // Make sure the image is a photo file
        if (!fileInfo.mimetype.startsWith('image')) {
            return res.status(400).send(`Please upload an image file`, 400);
        }

       

        // get file name
        const fileName = req.files.file.name

        // time stamp
        const timeStamp = Date.now()
        console.log("time stamp:",timeStamp);

        // concatenate name and time stamp before saving to db
        const saveName = timeStamp + fileName;
        console.log("this is the name I want to save",saveName);

        // change default name to new name
        req.body.file = saveName;
        console.log("new file name:",saveName);
        // req.body.name= fileName
        // req.body.question= "Server side question"

        
        // Use the mv() method to place the file on your server
        const fileData = req.files.file
        const path = '../client/public/uploads/' + saveName
        fileData.mv(path, function(err) {
            if (err)
            return res.status(500).send(err);

            // needs to return a status not a send
            return res.status('File uploaded!');
        });
        
        console.log("path here",path);
        
        // add file name to the db
        Project.create(req.body)
        .then(newProject => {
            res.json({Project: newProject})
        
        })
        .catch((err) => { res.status(400).json(err);})


        

    
    },
    
    // delete 
    delete (req, res){
        Project.deleteOne({_id: req.params.id})
        .then(result => res.json({Project: result}))
        .catch((err) => {res.status(400).json(err);})
    },
  
    // render 
    getAll (req, res){
        Project.find()
        .then(result => res.json({Project: result}))
        .catch((err) => {res.status(400).json(err);})
    },


        
    // find one 
    findSingleProject (req, res){
        Project.findOne(({_id: req.params.id}))
        .then(oneSingleProject => res.json({Project: oneSingleProject}))
        .catch((err) => {res.status(400).json(err);})
    },
    

    // update 
    update (req, res){
        Project.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(result => res.json({Project: result}))
        .catch((err) => {res.status(400).json(err);})
    },
  
    



}