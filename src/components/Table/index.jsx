import React, { useState, useEffect } from 'react';
import Table from "./table";
import DatePicker from "./datePicker";
import useWindowWidth from "../../hooks/useMediaQuery";
import DisplayCard from "../DisplayCard";

const newExchange = 'newExchange'
const data = [
  {
    key: '1',
    DateTime: '22/01/2022  20:55',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    DateTime: '22/01/2022  20:55',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    DateTime: '22/01/2022  20:55',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    DateTime: '22/01/2022  20:55',
    chinese: 88,
    math: 99,
    english: 89,
  },
];

const TableSection = ({ socket, isConnected }) => {
  const isMobile = useWindowWidth();
  const [tableData, setTableData] =  useState([])

  useEffect(() => {    
    const eventlistener = (newData) => {
      setTableData((prev) => [...prev, newData])
    }
    socket.on('newExchange', eventlistener);
    return () => socket.off("newExchange", eventlistener);
  }, []);

  // console.log('table Data after adding', tableData);

  return (
    <div className="table-section">
      <h1 className="history">History</h1>
      <DatePicker />
      {isMobile ? (
        <DisplayCard socket={socket} isConnected={isConnected} tableData={tableData} />
      ) : (
        <Table socket={socket} isConnected={isConnected} tableData={tableData}/>
      )}
    </div>
  );
};

export default TableSection;
