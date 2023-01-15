import {
  Form,
  Input,
  Select,
  Button,
  Row,
  Col,
  InputNumber,
  Space,
} from "antd";
const { Option } = Select;
import useWindowWidth from "../../hooks/useMediaQuery";

const Header = () => {
  const isMobile = useWindowWidth();
  console.log(isMobile, "............");
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (value) => {
    console.log("changed", value);
  };

  return (
    <div className="header">
      <div className="header-children-container">
        <h1 className="title">Exchange</h1>

        <Form>
          <div className="input-container">
            <Space size={16}>
              <Form.Item label="Select Currency">
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

              <Form.Item label="Enter Amount">
                <InputNumber
                  size="large"
                  min={1}
                  max={100000}
                  defaultValue={3}
                  onChange={onChange}
                  style={{ width: 160, height: 42 }}
                />
              </Form.Item>

              {!isMobile && <span>=</span>}

              <Form.Item label="Select Currency">
                <Select
                  className="second-select"
                  defaultValue="lucy"
                  style={{ width: 200, height: 42 }}
                  options={[
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                  ]}
                />
              </Form.Item>

              <Form.Item label="Enter Amount">
                <InputNumber
                  size="large"
                  style={{ width: 160, height: 42 }}
                  defaultValue={1000}
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  onChange={onChange}
                />
              </Form.Item>

              {isMobile ? (
                <Button className="exchange-button btn">Exchange</Button>
              ) : (
                <Button className="save-button btn">Save</Button>
              )}
            </Space>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Header;
