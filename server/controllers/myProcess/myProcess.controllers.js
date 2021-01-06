const MyProcess = require("../../models/myProcess/myProcess.models");


module.exports = {
// CRUD operations

    // Create 
    create (req, res){       
        // add file name to the db
        MyProcess.create(req.body)
        .then(newMyProcess => {
            res.json({MyProcess: newMyProcess})
        
        })
        .catch((err) => { res.status(400).json(err);})

    },
    
    // delete 
    delete (req, res){
        MyProcess.deleteOne({_id: req.params.id})
        .then(result => res.json({MyProcess: result}))
        .catch((err) => {res.status(400).json(err);})
    },
  
    // render 
    getAll (req, res){
        MyProcess.find()
        .then(result => res.json({MyProcess: result}))
        .catch((err) => {res.status(400).json(err);})
    },


        
    // find one 
    findSingleMyProcess (req, res){
        MyProcess.findOne(({_id: req.params.id}))
        .then(oneSingleMyProcess => res.json({MyProcess: oneSingleMyProcess}))
        .catch((err) => {res.status(400).json(err);})
    },
    

    // update 
    update (req, res){
        MyProcess.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(result => res.json({MyProcess: result}))
        .catch((err) => {res.status(400).json(err);})
    },
  
    



}