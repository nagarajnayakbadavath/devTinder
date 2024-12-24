const express=require('express');

const app=express();


app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000");
});

app.use("/test",(req,res)=>{
    res.send("Test From the Server");
});

app.use("/hello",(req,res)=>{
    res.send("Hello Hello!");
});

app.use("/helloWorld",(req,res)=>{
    res.send("Hello Hello Hello!");
});