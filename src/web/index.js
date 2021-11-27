const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server, {
	path: '/api/socket',
	cors: {
		origin: 'http://localhost:8080',
	},
});

app.get('/', (req, res) => {
	res.send('Hello World');
});

server.listen(3000, () => {
	console.log('Lisitening on Web');
});
