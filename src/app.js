const express=require('express');
const app=express();
const connectdb=require("./config/database");
const User=require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
    // console.log(req.body);
    const user=new User(req.body);
    try{
        await user.save();
        res.send("User added successfully");
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).send("Internal Server Error");
    }
});

connectdb().then(()=>{
    console.log("Database connection success");
    app.listen(3000,()=>{
        console.log("Server is successfully listening on port 3000");
    });
}).catch(err=>{
    console.error("Database is not connected");
});



