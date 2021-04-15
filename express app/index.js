//1.require(or import) the express module
const express=require("express")
//2.initilize your express app
const app=express();

// generalize production PORT
const PORT=process.env.PORT || 3000;
//3.listen server app on a PORT
app.listen(PORT,function(){
    console.log(`Server started at PORT ${PORT}`);
});
//4. reply by the server to client(handle client request)
//syntax->
// app.method('route',callback(){})
//there are mainly four type of methods i.e get,post,put,delete

//handling '/' Home Router-------------------------
app.get('/',function(req,res){
    res.send("hello this is express server");
})

//  '/about' router
app.get('/about',function(req,res){
    res.send("Welcome this is about page");
})


