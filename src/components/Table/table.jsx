import { Table } from "antd";
const fetchExchange = "fetchExchange";
const columns = [
  {
    title: "Date & Time",
    dataIndex: "createdAt",
  },
  {
    title: "Currency From",
    dataIndex: "currencyFrom",
    sorter: {
      compare: (a, b) => a.currencyFrom - b.currencyFrom,
      multiple: 3,
    },
  },
  {
    title: "Amount 1",
    dataIndex: "amountFrom",
    sorter: {
      compare: (a, b) => a.amountFrom - b.amountFrom,
      multiple: 3,
    },
  },
  {
    title: "CurrencyTo",
    dataIndex: "currencyTo",
    sorter: {
      compare: (a, b) => a.currencyTo - b.currencyTo,
      multiple: 3,
    },
  },
  {
    title: "Amount 2",
    dataIndex: "amountTo",
    sorter: {
      compare: (a, b) => a.amountTo - b.amountTo,
      multiple: 2,
    },
  },
  {
    title: "Type",
    dataIndex: "type",
    sorter: {
      compare: (a, b) => a.type - b.type,
      multiple: 1,
    },
    render: (text, record) => {
      if (record.type === "exchanged") {
        return <span className="exchanged">Exchanged</span>;
      } else if (record.type === "live_price") {
        return <span className="live_price">Live Price</span>;
      } else {
        return <span>{text}</span>;
      }
    },
  },
];

const TableWidget = ({
  tableData,
  totalCount,
  socket,
  pageSize,
  currentPage,
}) => {
  const pagination = {
    total: totalCount,
    pageSize,
    current: currentPage,
  };

  const onChange = (pagination, filters, sorter, extra) => {
    if (extra.action === "paginate") {
      socket.emit(fetchExchange, {
        page: pagination.current,
        limit: pageSize
      });
    }
  };

  return (
    <Table
      socket={socket}
      columns={columns}
      dataSource={tableData.map((item) => ({ ...item, key: item._id }))}
      onChange={onChange}
      pagination={pagination}
      pageSize={pageSize}
    />
  );
};
export default TableWidget;
