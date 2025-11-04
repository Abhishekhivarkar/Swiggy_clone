import express from "express"
import mongoose from "mongoose"

const Food_Items_Schema = mongoose.Schema({
  name:String,
  image:String,
  price:Number,
  location:String
})

const Food_Items_Model = mongoose.model("Food",Food_Items_Schema)

export default Food_Items_Model