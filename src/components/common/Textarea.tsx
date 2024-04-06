import React from "react";
import { common } from "../../styles/common.css";

interface textType {
  name?: string;
  setAreaVal?: (value: string) => void;
}

const Textarea = ({ name, setAreaVal }: textType) => {
  return (
    <textarea
      placeholder="할 일을 입력해주세요"
      className={`${common.textArea} ${name ? common[name] : ""}`}
      onChange={(e) => setAreaVal && setAreaVal(e.target.value)}
    ></textarea>
  );
};

export default Textarea;
