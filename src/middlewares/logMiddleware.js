let fs = require("fs")

const logMiddleware = (req, res, next) => {
    fs.appendFileSync("./src/data/log.txt", `Se ingresó a la ruta: http://localhost:3000${req.url}\n`)
    next()
}
module.exports = logMiddleware