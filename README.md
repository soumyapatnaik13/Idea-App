1.store the express function in the app variable so that i can use all that in built in method.
2.defined the port in order to listen to the server request in that specific port
3.then in order to handle all the route incoming created another file and there written all that logic of speicific call like for get ,put ,post and delete
4.then when the user hit that route then i have creted  all the function in the controller file  which has 2 arg one is req and res ..if the user gives the correct url then i will send the 
respond by using res.send using status code and if not then i can write the status code 404 by using res.status(404)
5.for db: i have created a demo data base which has some key value in obj which i have used by exporting that from module file by using module.exports and use in the controller
6.then if the user has :id then req.param.id can hold that value..so i have used that logic inorder to fetch that id in the post put and delete
7.then when the user will send some value to put in the form of json i have used the middleware inorder to convert that into js obj .i have defined that inside app.use();
