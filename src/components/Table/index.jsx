import React, { useState, useEffect } from "react";
import Table from "./table";
import DatePicker from "./datePicker";
import useWindowWidth from "../../hooks/useMediaQuery";
import DisplayCard from "../DisplayCard";
import { CSSTransition } from "react-transition-group";

const newExchange = "newExchange";
const allExchange = "allExchange";

const TableSection = ({ socket, isConnected }) => {
  const isMobile = useWindowWidth();
  const [tableData, setTableData] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const eventlistener = (newData) => {
      setTableData((prev) => [newData, ...prev]);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    };
    socket.on(newExchange, eventlistener);
    return () => socket.off(newExchange, eventlistener);
  }, []);

  useEffect(() => {
    const eventlistener = ({ data, count }) => {
      setTableData(data);
      setTotalCount(count);
    };
    socket.on(allExchange, eventlistener);
    return () => socket.off(allExchange, eventlistener);
  }, []);

  return (
    <div className="table-section">
      <h1 className="history">History</h1>
      <DatePicker
        socket={socket}
        pageSize={pageSize}
        setCurrentPage={setCurrentPage}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
        type={type}
        setType={setType}
      />
      {isMobile ? (
        <DisplayCard
          socket={socket}
          isConnected={isConnected}
          tableData={tableData}
          totalCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      ) : (
        <Table
          socket={socket}
          // isConnected={isConnected}
          tableData={tableData}
          totalCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      )}

      {showMessage && (
        <CSSTransition in={true} timeout={300} classNames="feed-back">
          <div className="feed-back">
            <p style={{ color: "white", textAlign: "center" }}>
              Exchange submitted.
            </p>
          </div>
        </CSSTransition>
      )}
    </div>
  );
};

export default TableSection;
