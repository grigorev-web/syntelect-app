import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { Store } from "./store";

const ControlAutoComplete: FC<{ maxHints: number }> = observer(({maxHints}) => {
  const [store] = useState(() => new Store());

  return (
    <div className="m-10">
      {store.selected && <div>{`Выбрано: ${store.selected.name}`}</div>}
      <input
        style={{ width: "600px" }}
        onChange={(e) => {
          store.search = e.target.value;
          store.onSearch(e.target.value);
        }}
        value={store.search}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-1"
      />
      <div className="absolute">
        {store.hints.slice(0,maxHints).map((el,i) => {
          return (
            <div
              onClick={() => store.onSelect(el.name)}
              className="flex bg-slate-50 hover:bg-slate-200 w-370 cursor-pointer relative z-10 m-1"
              style={{ width: "600px" }}
              key={i}
            >
              <img src={el.flag} className="m-1 w-8" />
              <div className="mt-1">{`${el.name} - ${el.fullName}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default ControlAutoComplete;
