const express = require('express');// Usamos el objeto express
const app = express();// Aplicacion de express
const port = 3000 // Puerto localhost:3000

//localhost:3000
app.get('/', (req, res) => {
    res.send("Hola a todos! 🙂🙂")
})
//Request = Peticion & Respond = Responder

//NUEVA RUTA | localhost:3000/launchx
app.get('/launchx', (req, res) =>{
    res.send("Bienvenidos a LaunchX 🌚")
})

//Nueva ruta | localhost:3000/node
app.get('/node', (req, res) => {
    //Interaccion conobjetos y node con express
    const explorer = {id:1, name: "Miguel Andrade"}
    const explorer2 = {id:2, name: "Sarai Karina"};
    const explorer3 = {id: 3, name: "Cristhian Martinez"};
    res.send([explorer, explorer2, explorer3]);
})

//Nueva ruta | localhost:3000/explorers/:explorer
app.get('/explorers/:explorer', (req, res) => {
    console.log(req.params);
    //Interaccion conobjetos y node con express
    res.send(req.params);
    // params contiene los Query Params (parámetros) enviados por la url.
    // En el ejemplo: explorers/:explorer | En el navegador: explorers/Miguel
    //Va obtener el parametro de la url Miguel y la plasmara en la web.
})

app.listen(port, () =>{ // Aqui se inicializa la app
    console.log(`Server listo: ${port}`);
})