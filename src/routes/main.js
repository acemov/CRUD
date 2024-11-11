const express = require("express")
const router = express.Router()
const logMainMiddleware = require("../middlewares/logMainMiddleware")

const mainControllers = require("../controllers/mainControllers")

router.get("/", logMainMiddleware ,mainControllers.main)

module.exports = router