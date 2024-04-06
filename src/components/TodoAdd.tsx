import React, { useReducer, useState } from "react";
import Textarea from "./common/Textarea";
import Button from "./common/Button";
import { listBox } from "../styles/todoList.css";
import { useTodoStore } from "../utils/store";

interface stateType {
  stateId: number;
  toggleAdd: (id: number) => void;
}

const TodoAdd = ({ stateId, toggleAdd }: stateType) => {
  const { addTodo } = useTodoStore();
  const [addId, setAddId] = useState(0);
  const [areaVal, setAreaVal] = useState("");

  const addTodoItem = () => {
    addTodo({ id: addId, text: areaVal, stateId });
    setAddId(addId + 1);
  };

  return (
    <div className={listBox.addBox}>
      <Textarea setAreaVal={setAreaVal} />
      <div className={listBox.btnBox}>
        <Button text={"추가"} name={"active"} onClick={() => addTodoItem()} />
        <Button text={"취소"} onClick={() => toggleAdd(stateId)} />
      </div>
    </div>
  );
};

export default TodoAdd;
