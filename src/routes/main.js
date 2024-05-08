const express = require("express")
const app = express()
const router = express.Router()

const mainControllers = require("../controllers/mainControllers")

router.get("/",mainControllers.main)

module.exports = router