import userModel from "../models/User.model.js"
import bcryptjs from "bcryptjs"
export const Sign_up =async (req,res) =>{
  try{
    const {email,password,cpassword} =req.body
    if (!email || !password || !cpassword){
      return res.status(400).json({message:"all fields are required"})
    }
    if (password !== cpassword){
      return res.status(400).json({message:"password do not match"})
    }
    const user =await userModel.findOne({email})
    if (user){
      res.status(400).json({message:"user already exists"})
    }
    const hashpassword =await bcryptjs.hash(password,10)
    const createUser = new userModel({
      email,
      password:hashpassword
    })
    await createUser.save()
    res.status(200).json({message:"sign in successfully",user:{
      email:createUser.email,
      password:createUser.password
    }})
  }catch(err){
    res.status(500).json({message:"Internal server error"})
    console.log("Error",err.message)
  }
}



export const Log_in =async(req,res)=>{
  try{
  const {email,password} = req.body
  if (!email || !password){
    res.status(400).json({message:"all fields are required"})
  }
  const exists_user =await userModel.findOne({email})
  if (!exists_user){
    return res.status(400).json({message:"user not found please register"})
  }
  const match =await bcryptjs.compare(password,exists_user.password)
  if (!match) {
   return res.status(400).json({message:"password incorrect"})
  }else{
    res.status(200).json({message:"Login successfully",user:{
      email:exists_user.email
    }})
  }}catch(err){
    res.status(500).json({message:"Internal server error"})
  }
  
}
