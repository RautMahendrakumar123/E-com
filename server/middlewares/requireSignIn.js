import jwt from 'jsonwebtoken'

const requireSignIn = (req,res,next)=>{
  if(!req.headers.authorization){
    return res.status(401).json({
        message: 'You Must Be Logged In First'
    })
  }
  const token = req.headers.authorization.replace('Bearer ', '')
  
  jwt.verify(token,process.env.secretSTR, (err,payload)=>{
    if(err){
        return res.status(401).json({
            message:'Unauthorized: Invalid Token'
        })
    }else{
        req.userid=payload.userId;
        
        next()
    }
  })
}

export default requireSignIn;