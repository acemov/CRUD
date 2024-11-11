const fs = require("fs")

const logMainMiddleware = (req, res, next) => {
    fs.appendFileSync("./src/data/logMain.txt", `Se ingresó a la ruta: http://localhost:3000${req.url}\n`)
    next()
}
module.exports = logMainMiddleware