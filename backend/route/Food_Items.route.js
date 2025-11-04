import express from "express"
import {fetch_food_items,fetch_food_items_by_id} from "../controller/Food_Items.controller.js"

const router = express.Router()
router.get("/",fetch_food_items)
router.get("/:id",fetch_food_items_by_id)
export default router