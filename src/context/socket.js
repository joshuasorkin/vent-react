import io from 'socket.io-client';
import React from 'react';

const server = process.env.SERVER_URL || "http://127.0.0.1:1337"
console.log({server});
const socket = io.connect(server);
socket.on('connection',()=>{
    console.log('connected to server');
})
const SocketContext = React.createContext();

export {socket,SocketContext};