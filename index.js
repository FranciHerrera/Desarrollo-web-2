const express = require('express');

const app = express();

const port = 3080;

let lentes = [
    {id: 1, name: "sol"},
    {id: 2, name: "steampunk"},
    {id: 3, name: "retro"}
];

app.listen(port,()=>{console.log("Server is connected")});

app.get('/',(req,res)=>{
    res.send("Hola mundo");
});