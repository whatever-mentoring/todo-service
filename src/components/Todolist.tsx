import React, { useReducer, useState } from "react";
import TodoAdd from "./TodoAdd";
import { listBox } from "../styles/todoList.css";
import { useTodoStore } from "../utils/store";

interface TodolistProps {
  defaultTitle: {
    id: number;
    title: string;
  }[];
}

const Todolist = ({ defaultTitle }: TodolistProps) => {
  const { todos } = useTodoStore();
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
      {defaultTitle.map((item, index) => (
        <div key={index} className={listBox.item}>
          <strong className={listBox.itemTitle}>{item.title}</strong>
          <button
            className={listBox.itemAdd}
            onClick={() => toggleAdd(item.id)}
          >
            추가
          </button>
          {visibleAdd[item.id] && (
            <TodoAdd stateId={item.id} toggleAdd={toggleAdd} />
          )}
          {["todo", "doing", "done"].map(
            (state, index) =>
              item.id === index && (
                <div key={index}>
                  {todos[state as "todo" | "doing" | "done"].map((todoItem) => (
                    <div key={todoItem.id} className={listBox.itemList}>
                      <pre className={listBox.itemText}>{todoItem.text}</pre>
                      <button className={listBox.itemRemove}>삭제</button>
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default Todolist;
