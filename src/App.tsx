import React from "react";
import "./App.css";
import ControlAutoComplete from "./components/ControlAutoComplete";
import { ControlWithBtns } from "./components/ControlWithBtns";
import { Store } from "./components/ControlWithBtns/store";

const config1 = {
  store: new Store(),
  buttons: [
    {
      place: "right",
      value: "Очистить",
      onClick: (s: Store) => s.clear(),
    },
    {
      place: "right",
      value: "Сказать 'hello'",
      onClick: (s: Store) => s.writeHello(),
    },
  ],
};

const config2 = {
  store: new Store(),
  buttons: [
    {
      place: "right",
      value: "Показать текст",
      onClick: (s: Store) => s.showText(),
    },
    {
      place: "left",
      value: "Показать цифру",
      onClick: (s: Store) => s.showDigit(),
    },
  ],
};

function App() {
  return (
    <div>
      <ControlWithBtns {...config1} />
      <ControlWithBtns {...config2} />
      <ControlAutoComplete maxHints={3}/>
      <ControlAutoComplete maxHints={10}/>
    </div>
  );
}

export default App;
