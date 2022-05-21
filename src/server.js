const express = require('express');
const server = express();
const route = require('./route');
const path = require('path');
const { use } = require('./route');

server.set('view engine', 'ejs')

server.set('views', path.join(__dirname, 'views'))

server.use(express.static('public'));


server.use(route)

server.listen(3000, () => console.log('Rodando no https://localhost:3000'))

