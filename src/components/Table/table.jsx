import { Table } from "antd";
const fetchPaginatedExchange = "fetchPaginatedExchange";
import moment from "moment";

const general = 'general'
const filteredExchange = 'filteredExchange'
const CustomSortIcon = () => (
  <svg
    width={14}
    height={15}
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33083 4.16917C3.27535 4.11606 3.20993 4.07443 3.13833 4.04667C2.99631 3.98832 2.83702 3.98832 2.695 4.04667C2.62339 4.07443 2.55797 4.11606 2.5025 4.16917L1.33583 5.33583C1.22599 5.44568 1.16428 5.59466 1.16428 5.75C1.16428 5.90534 1.22599 6.05432 1.33583 6.16417C1.44567 6.27401 1.59465 6.33572 1.75 6.33572C1.90534 6.33572 2.05432 6.27401 2.16416 6.16417L2.33333 5.98917V10.4167C2.33333 10.5714 2.39479 10.7197 2.50418 10.8291C2.61358 10.9385 2.76195 11 2.91666 11C3.07137 11 3.21975 10.9385 3.32914 10.8291C3.43854 10.7197 3.5 10.5714 3.5 10.4167V5.98917L3.66916 6.16417C3.72339 6.21884 3.78791 6.26224 3.85899 6.29185C3.93008 6.32147 4.00632 6.33672 4.08333 6.33672C4.16034 6.33672 4.23658 6.32147 4.30767 6.29185C4.37875 6.26224 4.44327 6.21884 4.4975 6.16417C4.55217 6.10994 4.59557 6.04542 4.62518 5.97434C4.6548 5.90325 4.67005 5.82701 4.67005 5.75C4.67005 5.67299 4.6548 5.59675 4.62518 5.52566C4.59557 5.45458 4.55217 5.39006 4.4975 5.33583L3.33083 4.16917ZM6.41666 5.16667H12.25C12.4047 5.16667 12.5531 5.10521 12.6625 4.99581C12.7719 4.88642 12.8333 4.73804 12.8333 4.58333C12.8333 4.42862 12.7719 4.28025 12.6625 4.17085C12.5531 4.06146 12.4047 4 12.25 4H6.41666C6.26195 4 6.11358 4.06146 6.00418 4.17085C5.89479 4.28025 5.83333 4.42862 5.83333 4.58333C5.83333 4.73804 5.89479 4.88642 6.00418 4.99581C6.11358 5.10521 6.26195 5.16667 6.41666 5.16667V5.16667ZM12.25 9.83333H6.41666C6.26195 9.83333 6.11358 9.89479 6.00418 10.0042C5.89479 10.1136 5.83333 10.262 5.83333 10.4167C5.83333 10.5714 5.89479 10.7197 6.00418 10.8291C6.11358 10.9385 6.26195 11 6.41666 11H12.25C12.4047 11 12.5531 10.9385 12.6625 10.8291C12.7719 10.7197 12.8333 10.5714 12.8333 10.4167C12.8333 10.262 12.7719 10.1136 12.6625 10.0042C12.5531 9.89479 12.4047 9.83333 12.25 9.83333ZM12.25 6.91667H6.41666C6.26195 6.91667 6.11358 6.97812 6.00418 7.08752C5.89479 7.19692 5.83333 7.34529 5.83333 7.5C5.83333 7.65471 5.89479 7.80308 6.00418 7.91248C6.11358 8.02187 6.26195 8.08333 6.41666 8.08333H12.25C12.4047 8.08333 12.5531 8.02187 12.6625 7.91248C12.7719 7.80308 12.8333 7.65471 12.8333 7.5C12.8333 7.34529 12.7719 7.19692 12.6625 7.08752C12.5531 6.97812 12.4047 6.91667 12.25 6.91667Z"
      fill="black"
    />
  </svg>
);

const columns = [
  {
    title: "Date & Time",
    dataIndex: "createdAt",

    render: (text) => {
      return moment(text).format("DD/MM/YYYY HH:mm");
    },
    sorter: (a, b) => moment(a.createdAt).diff(moment(b.createdAt)),
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
  fromDate,
  toDate,
  type,
  pageResultType
}) => {
  const pagination = {
    total: totalCount,
    pageSize,
    current: currentPage,
  };

  const onChange = (pagination, filters, sorter, extra) => {
    if (extra.action === "paginate") {
      socket.emit(fetchPaginatedExchange, {
        page: pagination.current,
        limit: pageSize,
        fromDate,
        toDate,
        type,
        pageResultType: pageResultType.current === general ? general : filteredExchange
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
