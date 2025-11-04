import mongoose from "mongoose"

const restaurantsSchema= mongoose.Schema({
  id:Number,
  name:String,
  rating:Number,
  location:String,
  Image:String,
  price:Number
})

const restaurantsModel = mongoose.model("restaurants",restaurantsSchema)

export default restaurantsModel