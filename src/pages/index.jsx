import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import  Header from '../components/Header';
import TableSection from '../components/Table';



const socket = io('http://localhost:8001');

const HomePage = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('connected');
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);


  return (
    <>
      <Header socket={socket} isConnected={isConnected} />
      <TableSection socket={socket} isConnected={isConnected} />
    </>
  );
};

export default HomePage;
