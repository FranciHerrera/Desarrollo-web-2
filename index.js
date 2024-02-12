const express = require('express');

const app = express();

const port = 3080;

let lentes = [
    {id: 1, name: "sol"},
    {id: 2, name: "steampunk"},
    {id: 3, name: "retro"}
];
app.get("/lentes", (req, res) =>{
    res.send(lentes)
});

app.post("/lentes", (req, res) => {
    const { body }  = req
    games.push(body)
    res.send("Se agrego el lente")
});

app.patch("/lentes/:id", (req, res) => {
    const { body }  = req
    const { name } = body
    const { id } = req.params;
    
    let lente = lentes.find((lente) => lente.id == id)
    lente.name = name
    res.send({message: "se elimino el lente", lente})
});

app.delete("/lentes/:id", (req, res) => {
    const { id } = req.params;
    lentes = lentes.filter((lente) => lente.id != id)
    res.send("Se elimino el lente")
});

app.listen(3000)