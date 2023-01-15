import Table from "./table";
import DatePicker from "./datePicker";
import useWindowWidth from "../../hooks/useMediaQuery";
import DisplayCard from "../DisplayCard";

const TableSection = () => {
  const isMobile = useWindowWidth();
  return (
    <div className="table-section">
      <h1 className="history">History</h1>
      <DatePicker />
      {isMobile ? <DisplayCard /> : <Table />}
    </div>
  );
};

export default TableSection;
