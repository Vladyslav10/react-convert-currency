import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Converter from "./components/Converter";
import Form from "./components/UI/form/Form";
import Menu from "./components/UI/menu/Menu";
import Navb from "./components/UI/navbar/Navb";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Конвертер валют ", id: "converter" },
    { value: "Форма реєстрації", id: "form" },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <Navb active={menuActive} setActive={setMenuActive} />
        <main>
          <Converter />
          <Form />
        </main>
        <Menu
          active={menuActive}
          setActive={setMenuActive}
          header={"Меню"}
          items={items}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
