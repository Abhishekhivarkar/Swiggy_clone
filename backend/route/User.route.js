import {Sign_up} from "../controller/User.controller.js"
import {Log_in} from "../controller/User.controller.js"
import express from "express"
const router = express.Router()
router.post("/sign_up",Sign_up)
router.post("/log_in",Log_in)
export default router