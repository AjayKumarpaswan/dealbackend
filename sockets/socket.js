module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('User connected:', socket.id);
      socket.on('joinRoom', ({ room }) => socket.join(room));
      socket.on('message', ({ room, message }) => io.to(room).emit('message', message));
    });
  };