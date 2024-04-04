import React from "react";
import Header from "./Header";
import { wrapBox } from "../styles/wrap.css";
import Section from "./Section";

const Wrap = () => {
  return (
    <div className={wrapBox.wrap}>
      <Header />
      <Section />
    </div>
  );
};

export default Wrap;
