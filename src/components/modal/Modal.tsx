import React, { useEffect, useState } from "react";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import { useTodoStore } from "../../utils/store";
import { modalBox } from "../../styles/modal.css";
import { listBox } from "../../styles/todoList.css";

interface TodoItem {
  id: number;
  text?: string;
  stateId: number;
}

interface ModalType {
  openState: boolean;
  setIsOpen: () => void;
  template: string;
  todoContent: TodoItem;
  title?: string;
}

export const Modal = (props: ModalType) => {
  const { openState, template, setIsOpen, todoContent, title } = props;
  const [areaVal, setAreaVal] = useState(
    todoContent.text ? todoContent.text : ""
  );
  const [updateActive, setUpdateActive] = useState(openState);
  const { updateTodo, removeTodo } = useTodoStore();

  const updateTodoItem = () => {
    if (updateActive) {
      updateTodo({
        id: todoContent.id,
        text: areaVal,
        stateId: todoContent.stateId,
      });
      setIsOpen();
    }
  };
  const removeTodoItem = () => {
    if (updateActive) {
      removeTodo({
        id: todoContent.id,
        stateId: todoContent.stateId,
      });
      setIsOpen();
    }
  };

  const modalContent = () => {
    if (template) {
      if (template === "confirm") {
        return (
          <div>
            <p className={modalBox.confirm}>
              선택하신 카드를 삭제하시겠습니까?
            </p>
            <div className={listBox.btnBox}>
              <Button
                text={"확인"}
                name={["active"].filter(Boolean)}
                onClick={() => {
                  removeTodoItem();
                }}
              />
              <Button
                text={"취소"}
                onClick={() => {
                  setIsOpen();
                }}
              />
            </div>
          </div>
        );
      } else if (template === "titleContent") {
        return <div>titleContent</div>;
      } else if (template === "editContent") {
        return (
          <div>
            <Textarea
              areaVal={areaVal}
              setAreaVal={setAreaVal}
              setAddActive={setUpdateActive}
            />
            <div className={listBox.btnBox}>
              <Button
                text={"수정"}
                name={["active", updateActive ? "" : "btnOff"].filter(Boolean)}
                onClick={() => updateTodoItem()}
              />
            </div>
          </div>
        );
      } else if (template === "remove") {
      }
    }
  };

  useEffect(() => {}, [openState]);

  if (template) {
    return (
      <div className={modalBox.modalFrame}>
        <div className={modalBox.modalContent}>
          {title && (
            <div className={modalBox.titleBox}>
              <strong className={modalBox.title}>{title}</strong>
              <button className={modalBox.itemAdd} onClick={() => setIsOpen()}>
                닫기
              </button>
            </div>
          )}
          {modalContent()}
        </div>
        <div className={modalBox.modalDim}></div>
      </div>
    );
  }
};
