const express = require('express');

const app = express();
app.use( express.static('public') )

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/scene.gltf', function (req, res) {
    res.sendFile(__dirname + '/public/scene.gltf')
})

app.listen(2021)