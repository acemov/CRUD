

const lista =[]

const post = {
    formulario:(req,res)=>{
        res.render("../views/products/formularioPost.ejs")
    },
    enviar:(req,res)=>{
        let post = req.body
        console.log(post);
        
        lista.push(JSON.stringify(post))
        console.log(lista);
        
        res.redirect("/enviar/lista") //muestra lo que se envio
    },
    lista:(req,res)=>{
        res.render("../views/products/lista.ejs",
        {
            "lista":lista
        })
    }
}
module.exports = post