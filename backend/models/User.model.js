import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  email:{
    required:true,
    unique:true,
    type:String
  },
 password:{
   required:true,
   type:String
 },
 
})

const userModel = mongoose.model("swiggy_user",userSchema)
export default userModel