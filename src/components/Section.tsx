import React, { useState } from "react";
import { sectionBox } from "../styles/section.css";
import Todolist from "./Todolist";

const Section = () => {
  const defaultTitle = [
    { id: 0, title: "해야할일" },
    { id: 1, title: "하는 중" },
    { id: 2, title: "다했어" },
  ];
  return (
    <div className={sectionBox.section}>
      <Todolist defaultTitle={defaultTitle} />
    </div>
  );
};

export default Section;
