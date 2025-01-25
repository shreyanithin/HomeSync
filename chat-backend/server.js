const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');  // Import cors module

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Allow CORS for all routes (you can restrict this for specific domains)
app.use(cors());

app.get('/', (req, res) => {
  res.send('Chat Server is running...');
});

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

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
