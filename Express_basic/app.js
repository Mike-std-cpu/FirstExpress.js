const express = require('express');// Usamos el objeto express
const app = express();// Aplicacion de express
const port = 3000 // Puerto localhost:3000

//localhost:3000
app.get('/', (req, res) => {
    res.send("Hola a todos!")
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
    res.send(explorer);
})

app.listen(port, () =>{ // Aqui se inicializa la app
    console.log(`Server listo: ${port}`);
})