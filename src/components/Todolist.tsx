import React, { useState } from "react";
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
    setVisibelAdd((prev) => ({ ...prev, [id]: !prev[id] }));
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
          {visibleAdd[item.id] && <div></div>}
        </div>
      ))}
    </div>
  );
};

export default Todolist;
