const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	// console.log('User Connected');

	socket.on("send_message", (data) => {
		console.log(data);
		socket.broadcast.emit("receive_message", data);
	});
});

server.listen(3001, () => {
	console.log("SERVER IS RUNNING");
});

// const http = require("http");
// const express = require("express");
// const socketio = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = socketio(server);

// io.on("connection", (socketio) => {
// 	console.log("User Connected", socket.id);

// 	socket.on("send_message", (data) => {
// 		socket.broadcast.emit("receive_message", data);
// 	});
// });

// const port = 3001;
// server.listen(port, () => {
// 	console.log(`Server is running on port ${port}`);
// });
