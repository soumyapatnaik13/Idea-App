//this will act as a server and the will give response to the client
//step 1: need to download the express fr to deal with all the routing
const express = require("express")

const app=express();
app.use(express.json())
require("./route/idea.route")(app)
const port=3000;


app.listen(port,()=>{
    console.log(`app is listeing at port num  ${port}` )
})