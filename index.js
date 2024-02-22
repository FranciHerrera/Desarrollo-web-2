const express = require('express');

const app = express();

const port = 3080;

let lentes = [
    {id: 1, name: "sol"},
    {id: 2, name: "steampunk"},
    {id: 3, name: "retro"}
];

app.use(express.json())

app.get("/lentes", (req, res) =>{
    res.send(lentes)
});

app.post("/lentes", (req, res) => {
    const { body }  = req
    lentes.push(body)
    res.send("Se agrego el lente")
});

app.patch("/lentes/:id", (req, res) => {
    const { body }  = req
    const { name } = body
    const { params } = req
    const { id } = params
    if(name === "" || name == undefined) res.send("Ingresa el nombre para poder actualizar")
    const lente = lentes.find((lente) => lente.id == id)
    lente.name = name
    res.send({message: "se actualizo el producto", lente})
});


app.delete("/lentes/:id", (req, res) => {
    const { id } = req.params;
    lentes = lentes.filter((lente) => lente.id != id)
    res.send("Se elimino el lente")
});

app.get("/lentes/:id",(req,res)=>{
    const { id } = req.params;
    const lente = lentes.find(lente => lente.id == id);
    if (!lente) {
        res.send("Lente no encontrado");
    }
    else{
        res.send(lente);
    }
});

console.log("Conectado en el puerto 3000")
app.listen(3000)