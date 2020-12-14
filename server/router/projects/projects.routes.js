const projectController = require("../../controllers/projects/projects.controllers");

module.exports = (app) => {
  app.post("/api/project", projectController.create);
  app.delete("/api/project/delete/:id", projectController.delete);
  app.get('/api/project', projectController.getAll);
  app.get("/api/project/:id", projectController.findSingleProject);
  app.put("/api/project/update/:id", projectController.update);
};    