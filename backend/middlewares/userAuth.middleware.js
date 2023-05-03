

const jwt = require("jsonwebtoken")

const userAuth = (req,res,next) => {
    const token = req.headers.token;
   if(token){
    try{
        jwt.verify(token,"EZ",(err,decoded)=>{
            if(decoded){
                next();
            }else{
                res.status(200).send({msg : "Please Login"})
            }
        })
    }catch(err){
        res.status(400).send(err)
    }
   }else{
    res.status(200).send("Please Login")
   }
};



module.exports = {
   userAuth
}