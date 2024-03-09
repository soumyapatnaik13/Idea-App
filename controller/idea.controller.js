 const ideas= require("../model/idea.model")

/**
 * so if the user has req to see the whole ideas then send this via res.send
 */
 id=3;
exports.getAlltheIdeas= (req,res)=>{  //exports. means you are retruring an obj 
     res.status(200).send(ideas)
}

exports.getIdeaBasedOnId = (req, res)=>{

     //We need to first read the idea id from the req path param
     idea_id = req.params.id
 
     // Using id, check if the idea with that id is present
     if(ideas[idea_id]){
         res.status(200).send(ideas[idea_id])
     }else{
         res.status(404).send({
             message : "Idea with the given idea id not found"
         })
     }
 
     //If preset return the id
 }
 exports.createIdea =(req,res)=>{
    idea_obj= req.body;
    id++;
    idea_obj["id"]=id;
    ideas[id]=idea_obj;

    res.status(201).send(idea_obj);

 }

 exports.updateIdea=(req,res)=>{
    get_id= req.params.id;
    if(ideas[get_id]){
      get_obj =req.body;
      ideas[get_id]=get_obj;
      res.status(201).send(get_obj);
    }
    else{
       return res.status(404).send({
        message:"this id doesnot exist"
       })
    }
 }

 exports.deleteIdea=(req,res)=>{
    get_id= req.params.id;
    if(ideas[get_id]){
        delete ideas[get_id]
        res.status(200).send({
            message : " you idea has been successfully deleted"
        })
    }
    return res.status(404).send({
        message:"this id doesnot exist"
       })
 }
