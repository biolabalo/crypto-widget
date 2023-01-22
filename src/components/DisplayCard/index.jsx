import { Modal } from "antd";
import { useState } from "react";
import moment from "moment";

const Approved = () => (
  <>
    <span className="rounded-green-circle"></span>&nbsp;&nbsp;
    <span style={{ color: "#40B439" }}>Approved</span>
  </>
);

const Mcontent = ({ left, right }) => (
  <div className="modal-content-r">
    <p className="lf">{left}</p>
    <p className="rs">{left === "Status" ? <Approved /> : right}</p>
  </div>
);
const DisplayCard = ({ tableData }) => {
  return tableData.map(
    ({
      amountFrom,
      amountTo,
      createdAt,
      currencyFrom,
      currencyTo,
      type,
      _id,
    }) => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      return (
        <div
          key={_id}
          className="display-card"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <div className="crypto-info">
            <p>
              {" "}
              {currencyFrom} {"\u2192"} {currencyTo}{" "}
            </p>
            <div className="rounded-green-circle"></div>
          </div>
          <div style={{ marginTop: "20px" }}>
            {" "}
            <span className="amount">Amount</span>&nbsp;&nbsp;
            <span className="crypt-val">
              {" "}
              {currencyFrom} {amountFrom}
            </span>
          </div>
          <Modal
            title="Exchange"
            open={isModalOpen}
            okButtonProps={{ style: { display: "none" } }}
            cancelText="Close"
            cancelButtonProps={{
              style: {
                color: "white",
                backgroundColor: "#49CD5E",
                fontWeight: "bold",
                borderRadius: " 8px",
                width: "326px",
                border: "none",
              },
            }}
          >
            <Mcontent
              left="Date & Time"
              right={moment(createdAt).format("DD/MM/YYYY HH:mm")}
            />
            <Mcontent left="Status" right="" />
            <Mcontent left="From" right={currencyFrom} />
            <Mcontent left="To" right={currencyTo} />
            <Mcontent left="Amount" right="" />
            <Mcontent left="Total Amount" right="" />
          </Modal>
        </div>
      );
    }
  );
};

export default DisplayCard;
