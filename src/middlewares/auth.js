module.exports.adminAuth=(req,res,next)=>{
    const token="abc";
    const isAdminAuthorized=token==="abc";
    if(!isAdminAuthorized){
        res.status(401).send("unauthorized admin");
    }else{
        next();
    }
};

module.exports.userAuth=(req,res,next)=>{
    const token="abc";
    const isAdminAuthorized=token==="abc";
    if(!isAdminAuthorized){
        res.status(401).send("unauthorized admin");
    }else{
        next();
    }
};