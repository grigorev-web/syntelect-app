import { makeAutoObservable } from "mobx";

export class Store {
  text: string;
  constructor() {
    this.text = "";
    makeAutoObservable(this);
  }

  writeHello() {
    this.text = "Hello world!";
  }
  showText() {
    if (this.text) alert(this.text);
    else alert("Пустой текст");
  }
  showDigit() {
    if (!isNaN(+this.text) && !isNaN(parseFloat(this.text))) alert(this.text);
    else alert("Это не цифра");
  }
  clear() {
    this.text = "";
  }
}
