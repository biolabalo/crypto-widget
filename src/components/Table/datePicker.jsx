import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Form, Input, Select, Button } from "antd";

import useWindowWidth from "../../hooks/useMediaQuery";

const { Option } = Select;

const DatePickerComp = () => {
  const [startDate, setStartDate] = useState(new Date());
  const isMobile = useWindowWidth();

  const handleChange = () => console.log("");

  return (
    <div className="date-picker-container">
      <div className="date-pick-parent">
        <label className="">From date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <div className="date-pick-parent">
        <label className="">To date </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      {!isMobile && (
        <Form.Item label="Type" className="select-type-date-picker">
          <Select
            defaultValue="lucy"
            style={{ width: 200, height: 42 }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "disabled",
                disabled: true,
                label: "Disabled",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
            ]}
          />
        </Form.Item>
      )}

      <Button className="filter-btn">Save</Button>
    </div>
  );
};

export default DatePickerComp;
