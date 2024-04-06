import React, { useReducer } from "react";
import Textarea from "./common/Textarea";
import Button from "./common/Button";
import { listBox } from "../styles/todoList.css";


interface stateType {
  stateId: number;
}

const TodoAdd = ({ stateId }: stateType) => {


  const addTodo = (stateId: number) => {

  };

  return (
    <div className={listBox.addBox}>
      <Textarea />
      <div className={listBox.btnBox}>
        <Button
          text={"추가"}
          name={"active"}
          onClick={() => addTodo(stateId)}
        />
        <Button text={"취소"} />
      </div>

    </div>
  );
};

export default TodoAdd;
