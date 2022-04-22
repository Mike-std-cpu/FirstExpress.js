const express = require('express');// Usamos el objeto express
const app = express();// Aplicacion de express
const port = 3000 // Puerto localhost:3000

//localhost:3000
app.get('/', (req, res) => {
    res.send("Hola a todos!")
})
//Request = Peticion & Respond = Responder

app.listen(port, () =>{ // Aqui se inicializa la app
    console.log(`Server listo: ${port}`);
})