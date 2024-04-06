import React from "react";
import { common } from "../../styles/common.css";

interface textType {
  name?: string;
}

const Textarea = ({ name }: textType) => {
  return (
    <textarea
      placeholder="할 일을 입력해주세요"
      className={`${common.textArea} ${name ? common[name] : ""}`}
    ></textarea>
  );
};

export default Textarea;
