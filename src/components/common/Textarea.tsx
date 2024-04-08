import React from "react";
import { common } from "../../styles/common.css";

interface textType {
  name?: string;
  areaVal?: string;
  setAreaVal?: (value: string) => void;
  setAddActive?: (state: boolean) => void;
}

const Textarea = ({ name, areaVal, setAreaVal, setAddActive }: textType) => {
  const changeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAreaVal && setAreaVal(e.target.value);
    if (e.target.value === "") {
      setAddActive?.(false);
    } else {
      setAddActive?.(true);
    }
  };

  return (
    <textarea
      placeholder="할 일을 입력해주세요"
      className={`${common.textArea} ${name ? common[name] : ""}`}
      onChange={(e) => changeValue(e)}
      value={areaVal}
      maxLength={500}
    ></textarea>
  );
};

export default Textarea;
