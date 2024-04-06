import React, { useReducer, useState } from "react";
import TodoAdd from "./TodoAdd";
import { listBox } from "../styles/todoList.css";

interface TodolistProps {
  defaultTitle: {
    id: number;
    title: string;
  }[];
}

const Todolist = ({ defaultTitle }: TodolistProps) => {
  const [visibleAdd, setVisibelAdd] = useState<{ [key: number]: boolean }>({});

  const toggleAdd = (id: number) => {
    setVisibelAdd((prev) => {
      const newState = Object.keys(prev).reduce<{ [key: string]: boolean }>(
        (acc, cur) => {
          acc[cur] = false;
          return acc;
        },
        {}
      );
      return { ...newState, [id]: !prev[id] };
    });
  };

  return (
    <div className={listBox.list}>
      {defaultTitle.map((item) => (
        <div key={item.id} className={listBox.item}>
          <strong className={listBox.itemTitle}>{item.title}</strong>
          <button
            className={listBox.itemAdd}
            onClick={() => toggleAdd(item.id)}
          >
            add
          </button>
          {visibleAdd[item.id] && <TodoAdd stateId={item.id} />}
        </div>
      ))}
    </div>
  );
};

export default Todolist;
