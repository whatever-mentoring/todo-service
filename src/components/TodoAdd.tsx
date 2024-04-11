import React, { useReducer, useState } from "react";
import Textarea from "./common/Textarea";
import Button from "./common/Button";
import { useTodoStore } from "../utils/store";
import { listBox } from "../styles/todoList.css";

interface stateType {
  stateId: number;
  toggleAdd: (id: number) => void;
}

const TodoAdd = ({ stateId, toggleAdd }: stateType) => {
  const { addTodo, itemId, increaseAddId } = useTodoStore();
  const [areaVal, setAreaVal] = useState("");
  const [addActive, setAddActive] = useState(false);

  const cleanUpModal = () => {
    increaseAddId();
    setAreaVal("");
    setAddActive(false);
  };

  const addTodoItem = () => {
    if (addActive) {
      addTodo({ id: itemId, text: areaVal, stateId });
      cleanUpModal();
    }
  };

  return (
    <div className={listBox.addBox}>
      <Textarea
        areaVal={areaVal}
        setAreaVal={setAreaVal}
        setAddActive={setAddActive}
      />
      <div className={listBox.btnBox}>
        <Button
          text={"추가"}
          name={["active", addActive ? "" : "btnOff"].filter(Boolean)}
          onClick={() => addTodoItem()}
        />
        <Button text={"취소"} onClick={() => toggleAdd(stateId)} />
      </div>
    </div>
  );
};

export default TodoAdd;
