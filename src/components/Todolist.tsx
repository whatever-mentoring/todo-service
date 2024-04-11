import React, { useEffect, useReducer, useState } from "react";
import TodoAdd from "./TodoAdd";
import { Modal } from "./modal/Modal";
import { listBox } from "../styles/todoList.css";
import { useTodoStore } from "../utils/store";

interface TodolistProps {
  defaultTitle: {
    id: number;
    title: string;
  }[];
}

interface TodoItem {
  id: number;
  text?: string;
  stateId: number;
}

const Todolist = ({ defaultTitle }: TodolistProps) => {
  const [contentModalOpen, setContentModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [contentState, setContentState] = useState<TodoItem | null>(null);
  const [confirmState, setConfirmState] = useState<TodoItem | null>(null);
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

  const removeTodoItem = (
    event: React.MouseEvent<HTMLElement>,
    id: number,
    stateId: number
  ) => {
    event.stopPropagation();
    setConfirmState({ id, stateId });
    setConfirmModalOpen(true);
  };

  const contentEdit = (todoItem: TodoItem) => {
    setContentState(todoItem);
    setContentModalOpen(true);
  };

  const closeContentModal = () => {
    setContentModalOpen(false);
  };

  const closeConfirmModal = () => {
    setConfirmModalOpen(false);
  };

  const renderTodoItems = (state: string, itemId: number) => {
    if (itemId !== ["todo", "doing", "done"].indexOf(state)) return null;
    return (
      <div key={itemId}>
        {todos[state as "todo" | "doing" | "done"].map((todoItem) => (
          <div
            key={todoItem.id}
            className={listBox.itemList}
            onDoubleClick={() => {
              contentEdit(todoItem);
            }}
          >
            <pre className={listBox.itemText}>{todoItem.text}</pre>
            <button
              className={listBox.itemRemove}
              onClick={(event) => removeTodoItem(event, todoItem.id, itemId)}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    );
  };

  const renderModal = (modalProps: TodoItem) => {
    let template = "";
    let title = "";
    let isOpen = false;
    let setIsOpen = () => {};

    if (modalProps === contentState) {
      template = "editContent";
      title = "내용수정";
      isOpen = contentModalOpen;
      setIsOpen = closeContentModal;
    } else if (modalProps === confirmState) {
      template = "confirm";
      isOpen = confirmModalOpen;
      setIsOpen = closeConfirmModal;
    }

    return (
      <Modal
        openState={isOpen}
        setIsOpen={setIsOpen}
        template={template}
        title={title}
        todoContent={modalProps}
      />
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
      {contentModalOpen && contentState && renderModal(contentState)}
      {confirmModalOpen && confirmState && renderModal(confirmState)}
    </div>
  );
};

export default Todolist;
