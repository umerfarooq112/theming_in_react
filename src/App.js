import { Select } from "antd";
import "./style/app.scss";
import React from "react";
import { useGetAllSuppliers } from "./gql/GetAllSuppliers";
import Tabledata from "./Tabledata";
import { useMemo, useState } from "react";

function App() {
  const [theme, setTheme] = React.useState("light");
  const { Option } = Select;

  const changeTheme = (theme) => {
    console.log(theme);
    if (theme == "dark") setTheme(theme);
    else setTheme(theme);
  };
  const factorialOf = (n) => {
    console.log("factorialOf(n) called!");
    return n <= 0 ? 1 : n * factorialOf(n - 1);
  };

  const [number, setNumber] = useState(0);
  const [inc, setInc] = useState(0);
  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => {
    console.log(inc);
    setInc(inc + 1);
  };
  return (
    <div className="App" data-theme={theme}>
      <div className="container">
        <p>I can chage this container color</p>
      </div>

      <div>
        Factorial of
        <input type="number" value={number} onChange={onChange} />
        is {factorial}
        <button onClick={onClick}>Re-render</button>
      </div>

      {/* <Select defaultValue="light" onChange={changeTheme}>
        <Option value="light">Light</Option>)<Option value="dark">dark</Option>)
      </Select>
      <div style={{ padding: "20px 20px" }}>
        <Tabledata /> */}
      {/* </div> */}
    </div>
  );
}

export default App;
