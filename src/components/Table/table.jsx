import { Table } from "antd";

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
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const TableWidget = ({ tableData }) => (
  <Table columns={columns} dataSource={tableData} onChange={onChange} />
);
export default TableWidget;
