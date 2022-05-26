import { Select } from "antd";
import "./style/app.scss";
import React from "react";
import { useGetAllSuppliers } from "./gql/GetAllSuppliers";
import Tabledata from "./Tabledata";
import { useEffect, useMemo, useState, useRef } from "react";

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

  const idRef = useRef(0);

  console.log(idRef, "is the current ref");

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
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    idRef.current = idRef.current + 1;
  }, [inputValue]);

  return (
    <div className="App" data-theme={theme}>
      <div className="container">
        <p>I can chage this container color</p>
      </div>

      <div>
        Factorial of
        <input value={number} onChange={onChange} />
        is {factorial}
        <button onClick={onClick}>Re-render</button>
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <h1>Render Count: {idRef.current}</h1>

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
