// const express = require('express'); // Esta sintaxis ya está depreciada
import express from 'express'; // ESM Ecmascript modules

const app = express();

// Routing
app.get('/', (req,res) => {
    res.send('Hello World!')
})

// const port = 4000
const port = process.env.PORT || 4000


app.listen(4000, () => {
    console.log('Servidor funcionando... en el puerto: ' + port)
})