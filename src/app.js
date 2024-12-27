const express=require('express');

const app=express();

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000");
});

const {adminAuth,userAuth} =require("./middlewares/auth");

app.use("/admin",adminAuth);

app.get("/admin/getAllData",(req,res,next)=>{
        res.send("All Data Send");
});

app.get("/user/getData",userAuth,(req,res,next)=>{
    res.send("Got Data");
});

app.get("/admin/deleteUser",(req,res,next)=>{
    res.send("Dleted the User");
});

app.get("/admin/deleteUser2",(req,res,next)=>{
    res.send("Dleted the User2");
});



