import { useState } from "react";
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

import BitcoinSVG from "../icons/Bitcoin";
import EthereumSVG from "../icons/Ethereum";
import RippleSVG from "../icons/Ripple";
import Litcoin from "../icons/Litcoin";
import USD from "../icons/USD";
import Euro from "../icons/Euro";
import ArrowIcon from "../icons/ArrowIcon";
import useWindowWidth from "../../hooks/useMediaQuery";

const saveExchangeType = "saveExchange";


const Header = ({ socket, isConnected }) => {
  const isMobile = useWindowWidth();
  const [currencyFrom, setCurrencyFrom] = useState("Bitcoin");
  const [amountFrom, setAmountFrom] = useState(1);
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [amountTo, setAmountTo] = useState(44000);

  const onlyNumber = (e) => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!/^[0-9]*$/.test(keyValue)) {
      e.preventDefault();
    }
  };

  const saveExchange = () => {

    if (!isConnected) return alert("no websocket connection established");

    socket.emit(saveExchangeType, {
      currencyFrom,
      amountFrom,
      currencyTo,
      amountTo,
      type: "exchanged",
    });
  };


  let isButtonDisabled = false;
  if (!amountFrom || !amountTo) {
    isButtonDisabled = true;
  }

  return (
    <div className="header">
      <div className="header-children-container">
        <h1 className="title">Exchange</h1>

        <Form>
          <div className="input-container">
            <Space size={16}>
              <Form.Item label="Currency From">
                <Select
                  suffixIcon={<ArrowIcon />}
                  placeholder='select'
                  // defaultValue={currencyFrom}
                  style={{ width: 200, height: 42 }}
                  onChange={setCurrencyFrom}
                  options={[
                    {
                      value: "Bitcoin",
                      label: <BitcoinSVG />,
                    },
                    {
                      value: "Ethereum",
                      label: <EthereumSVG />,
                    },
                    {
                      value: "Ripple",
                      label: <RippleSVG />,
                    },
                    {
                      value: "Litcoin",
                      label: <Litcoin />,
                    },
                  ]}
                />
              </Form.Item>

              <Form.Item label="Amount">
                <InputNumber
                  size="large"
                  min={1}
                  defaultValue={amountFrom}
                  onChange={setAmountFrom}
                  onKeyPress={onlyNumber}
                  style={{ width: 160, height: 42 }}
                />
              </Form.Item>

              {!isMobile && <span>=</span>}

              <Form.Item label="Exchange to">
                <Select
                  suffixIcon={<ArrowIcon />}
                  className="second-select"
                  defaultValue={currencyTo}
                  style={{ width: 200, height: 42 }}
                  onChange={setCurrencyTo}
                  options={[
                    {
                      value: "USD",
                      label: <USD />,
                    },
                  ]}
                />
              </Form.Item>

              <Form.Item label="Amount">
                <InputNumber
                  min={1}
                  size="large"
                  style={{ width: 160, height: 42 }}
                  defaultValue={amountTo}
                  formatter={(value) => {
                    return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  }}
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  onChange={setAmountTo}
                  onKeyPress={onlyNumber}
                />
              </Form.Item>

              {isMobile ? (
                <Button
                  className="exchange-button btn"
                  disabled={isButtonDisabled}
                  onClick={saveExchange}
                >
                  Exchange
                </Button>
              ) : (
                <Button
                  className="save-button btn"
                  disabled={isButtonDisabled}
                  onClick={saveExchange}
                >
                  Save
                </Button>
              )}
            </Space>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Header;
