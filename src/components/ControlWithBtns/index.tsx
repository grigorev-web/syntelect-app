import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Store } from "./store";

export type ControlWithBtnsProps = {
  store: Store;
  buttons: ControlButton[];
};

type ControlButton = {
  place: string;
  value: string;
  onClick: (s: Store) => void;
};

export const ControlWithBtns: FC<ControlWithBtnsProps> = observer(
  ({ store, buttons }) => {
    return (
      <div className="flex m-7">
        {buttons.map((btn, i) => {
          return btn.place === "left" ? (
            <div
              onClick={() => btn.onClick(store)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1"
              key={i}
            >
              {btn.value}
            </div>
          ) : null;
        })}
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-500 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-1"
          value={store.text}
          onChange={(e) => {
            store.text = e.target.value;
          }}
          width={2000}
        />
        {buttons.map((btn, i) => {
          return btn.place === "right" ? (
            <div
              onClick={() => btn.onClick(store)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1"
              key={i}
            >
              {btn.value}
            </div>
          ) : null;
        })}
      </div>
    );
  }
);
