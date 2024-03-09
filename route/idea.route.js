const idea=require("../controller/idea.controller");

module.exports= (app)=>{ 
    app.get("/ideaApp/api/v1/ideas",idea.getAlltheIdeas)
    app.get("/ideaApp/api/v1/ideas/:id",idea.getIdeaBasedOnId)
    app.post("/ideaApp/api/v1/ideas",idea.createIdea)
    app.put("/ideaApp/api/v1/ideas/:id" , idea.updateIdea)
    app.delete("/ideaApp/api/v1/ideas/:id" , idea.deleteIdea)

}
