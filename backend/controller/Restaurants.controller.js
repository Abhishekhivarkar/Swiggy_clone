import restaurantsModel from "../models/Restaurants.model.js"

export const getData = async(req,res) =>{
  try{
    const data = await restaurantsModel.find()
    res.status(200).json(data)
    console.log("data received")
  }catch(err){
    res.status(500).json(err)
    console.log("Internal error",err.message)
  }
}



export const fetch_restaurant_by_id =async(req,res)=>{
  try{
  const {id} = req.params
  const restaurant =await restaurantsModel.findById(id)
  if(!restaurant){
    res.status(400).json({message:"data not found"})
  }
  res.status(200).json(restaurant)
  }catch(err){
    res.status(500).json({message:"Internal server error"})
    console.log("Error" ,err.message)
  }
}
