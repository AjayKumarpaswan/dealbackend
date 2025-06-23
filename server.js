require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIO = require('socket.io');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const dealRoutes = require('./routes/dealRoutes');
const messageRoutes = require('./routes/messageRoutes');
const setupSocket = require('./sockets/socket');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, { cors: { origin: '*' } });
setupSocket(io);

connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/deals', dealRoutes);
app.use('/api/messages', messageRoutes);

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});