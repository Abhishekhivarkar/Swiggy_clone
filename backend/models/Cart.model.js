import momgoose from "mongoose"
const cartSchema = mongoose.Schema({
  name:String,
  price:Number,
})

const cartModel = mongoose.model("cart",cartSchema)
export default cartModel