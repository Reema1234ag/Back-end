//1.require(or import) the express module
const express=require("express")
//2.initilize your express app
const app=express();

// generalize production PORT
const PORT=process.env.PORT ||3000;
//3.listen server app on a PORT
app.listen(PORT,function(){
    console.log(`Server started at PORT ${PORT}`);
});