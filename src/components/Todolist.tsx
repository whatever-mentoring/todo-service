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
  const { todos, counts, removeTodo } = useTodoStore();
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

  const removeTodoItem = (id: number, stateId: number) => {
    const isConfirmed = window.confirm("선택하신 카드를 삭제하시겠습니까?");
    if (isConfirmed) {
      removeTodo({ id, stateId });
    }
  };

  const renderTodoItems = (state: string, itemId: number) => {
    if (itemId !== ["todo", "doing", "done"].indexOf(state)) return null;
    return (
      <div key={itemId}>
        {todos[state as "todo" | "doing" | "done"].map((todoItem) => (
          <div key={todoItem.id} className={listBox.itemList}>
            <pre className={listBox.itemText}>{todoItem.text}</pre>
            <button
              className={listBox.itemRemove}
              onClick={() => removeTodoItem(todoItem.id, itemId)}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={listBox.list}>
      {defaultTitle.map((item) => (
        <div key={item.id} className={listBox.item}>
          <strong className={listBox.itemTitle}>
            {item.title}
            <span className={listBox.itemLength}>
              {item.id === 0 && counts.todoCount}
              {item.id === 1 && counts.doingCount}
              {item.id === 2 && counts.doneCount}
            </span>
          </strong>

          <button
            className={listBox.itemAdd}
            onClick={() => toggleAdd(item.id)}
          >
            추가
          </button>
          <div className={listBox.listWrap}>
            {visibleAdd[item.id] && (
              <TodoAdd stateId={item.id} toggleAdd={toggleAdd} />
            )}
            {["todo", "doing", "done"].map((state) =>
              renderTodoItems(state, item.id)
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
