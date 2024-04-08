import React from "react";
import { common } from "../../styles/common.css";

interface btnType {
  text: string;
  onClick?: () => void;
  name?: string[];
}

const Button = ({ text, onClick, name }: btnType) => {
  const className = `${common.btn} ${
    name ? name.map((n) => common[n]).join(" ") : ""
  }`;
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
