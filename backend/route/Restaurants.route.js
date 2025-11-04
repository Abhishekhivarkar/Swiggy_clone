import express from "express"
const router = express.Router()
import { getData,fetch_restaurant_by_id} from "../controller/Restaurants.controller.js"

router.get("/",getData)
router.get("/:id",fetch_restaurant_by_id)
export default router