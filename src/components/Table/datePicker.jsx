import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Select, Button } from "antd";
import moment from 'moment'
import useWindowWidth from "../../hooks/useMediaQuery";


const fetchExchangeViaFilter = "fetchExchangeViaFilter";
const filteredExchange = 'filteredExchange'


const DatePickerComp = ({
  socket,
  setCurrentPage,
  pageSize,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  type,
  setType,
  pageResultType
}) => {
  const isMobile = useWindowWidth();

  const fetchExchanges = () => {

    pageResultType.current = filteredExchange;

    socket.emit(fetchExchangeViaFilter, {
      page: 1,
      limit: pageSize,
      ...(fromDate ? {fromDate: moment(fromDate).format()} : {}),
      ...(toDate ? {toDate: moment(toDate).format()} : {}),
      type,
    });
    setCurrentPage(1);
  };

  const minToDate = fromDate ? new Date(fromDate) : "";
  if (minToDate) {
    minToDate.setDate(minToDate.getDate() + 1);
  }

  return (
    <div className="date-picker-container">
      <div className="date-pick-parent">
        <label className="">{ isMobile ? 'Start Date' : 'From date' } </label>
        <DatePicker
          selected={fromDate}
          onChange={(date) => {
            setFromDate(date);
            setToDate("");
          }}
          placeholderText={ isMobile ? 'Select' : '22/01/****' }
        />
      </div>

      <div className="date-pick-parent">
        <label className=""> { isMobile ? 'End date' : 'To date'} </label>
        <DatePicker
          selected={toDate}
          minDate={minToDate}
          onChange={(date) => setToDate(date)}
          placeholderText={ isMobile ? 'Today' : '22/01/****' }
        />
      </div>

      {!isMobile && (
        <Form.Item label="Type" className="select-type-date-picker">
          <Select
            defaultValue={type}
            style={{ width: 160, height: 42 }}
            onChange={setType}
            options={[
              {
                value: "live_price",
                label: "Live Price",
              },
              {
                value: "exchanged",
                label: "Exchanged",
              },
              {
                value: "",
                label: "All",
              },
            ]}
          />
        </Form.Item>
      )}

      <Button className="filter-btn" onClick={fetchExchanges}>
        Filter
      </Button>
    </div>
  );
};

export default DatePickerComp;
