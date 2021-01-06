const myInfoController = require("../../controllers/myInfo/myInfo.controllers");

module.exports = (app) => {
  app.post("/api/myInfo", myInfoController.create);
  app.delete("/api/myInfo/delete/:id", myInfoController.delete);
  app.get('/api/myInfo', myInfoController.getAll);
  app.get("/api/myInfo/:id", myInfoController.findSingleMyInfo);
  app.put("/api/myInfo/update/:id", myInfoController.update);
};    