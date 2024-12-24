const express=require('express');

const app=express();


app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000");
});

app.get("/user",(req,res)=>{
    res.send(
        {
            firstName:"Badavath",
            lastName:"Nagaraju"
        }
    );
});

app.post("/user",(req,res)=>{
    //saving the data in to db logic
    res.send("Data Saved Successfully");
});

app.delete("/user",(req,res)=>{
    res.send("Data is deleted successfully");
});