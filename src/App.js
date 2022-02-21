import { Select } from "antd";
import "./style/app.scss";
import React from "react";

function App() {
  const [theme, setTheme] = React.useState("light");
  const { Option } = Select;

  const changeTheme = (theme) => {
    console.log(theme);
    if (theme == "dark") setTheme(theme);
    else setTheme(theme);
  };
  return (
    <div className="App" data-theme={theme}>
      <div className="container">
        <p>I can chage this container color</p>
      </div>

      <Select defaultValue="light" onChange={changeTheme}>
        <Option value="light">Light</Option>)<Option value="dark">dark</Option>)
      </Select>
    </div>
  );
}

export default App;
