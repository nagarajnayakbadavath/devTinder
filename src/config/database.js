const mongoose=require('mongoose');

const connectdb=async()=>{
    await mongoose.connect('mongodb+srv://nagarajnayak:Naga_1136@nodejs.79nbz.mongodb.net/devTinder');
};

module.exports=connectdb;