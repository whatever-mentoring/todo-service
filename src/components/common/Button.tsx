import React from "react";
import { common } from "../../styles/common.css";

interface btnType {
  text: string;
  onClick?: () => void;
  name?: string;
}

const Button = ({ text, onClick, name }: btnType) => {
  return (
    <button
      className={`${common.btn} ${name ? common[name] : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
