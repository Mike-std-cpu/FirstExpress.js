const express = require('express');// Usamos el objeto express
const app = express();// Aplicacion de express
const port = 3000 // Puerto localhost:3000

//localhost:3000
app.get('/', (req, res) => {
    res.send("Hola a todos! 🙂🙂");
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
    // http://localhost:3000/explorers/Miguel
})
//ENDPOING
/*
  * routes.
  * Methods HTTP: GET (Regresar info) | POST (insertar info) | PUT (Actualizar info) | DELETE
*/
app.get('/v1/explorers', (req,res) => { // endPoint
    console.log(`GET explorers V1 API ${new Date()}`);
    const explorer = {id:1, name: "Miguel Andrade"}
    const explorer2 = {id:2, name: "Sarai Karina"};
    const explorer3 = {id: 3, name: "Cristhian Martinez"};
    const explorers = [explorer,explorer2,explorer3];

    //Respuesta con API
    res.status(200).json(explorers);
})

app.get('/v1/explorers/:id', (req,res) => { // endPoint
    console.log(`GET BY ID Explorers V1 API ${new Date()}`)
    const explorer1 = {id:1, name: "Miguel Andrade"}

    //Respuesta con API
    res.status(200).json(explorer1);
})

// POST
app.post('/v1/explorers',(req,res) => {
    console.log(`POST Explorers V1 API ${new Date()}`);
    // Agregar logica para presisistir
    console.log(req.body) //parametros del request
    res.status(201).json({message: "Creado exitosamente 🙂"});
})
// PUT
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`PUT Explorers V1 API ${new Date()}`);
    console.log(`Update explorer con id ${req.params.id}`);
    //Agregar logica para actualzar
    // console.log(req.body); // Parametros para actualzar
    const requestBody = req.body // Parametros del cliente
    console.log(req.params.id); // quierry params
    res.status(200).json({message: "Actualizado exitosamente"});
})

//DELETE
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`DELETE Explorers V1 API ${new Date()}`);
    //Agregar logica para actualzar
    console.log(req.body); // Parametros para actualzar
    console.log(req.params.id); // quierry params
    res.status(200).json({message: "Se elimino exitosamente"});
})

app.listen(port, () =>{ // Aqui se inicializa la app
    console.log(`Server listo: ${port}`);
})