const myProcessController = require("../../controllers/myProcess/myProcess.controllers");

module.exports = (app) => {
  app.post("/api/myProcess", myProcessController.create);
  app.delete("/api/myProcess/delete/:id", myProcessController.delete);
  app.get('/api/myProcess', myProcessController.getAll);
  app.get("/api/myProcess/:id", myProcessController.findSingleMyProcess);
  app.put("/api/myProcess/update/:id", myProcessController.update);
};    