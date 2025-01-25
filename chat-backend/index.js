const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware to handle requests (optional)
app.use(express.json());

// Simple route to check if server is running
app.get('/', (req, res) => {
  res.send('Chat server is running...');
});

// Socket.io logic for real-time communication
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });

  socket.on('message', (message) => {
    console.log('Message received:', message);
    io.emit('message', message);  // Broadcast message to all clients
  });
});

// Set the port the server will listen to
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
