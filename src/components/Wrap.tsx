import React from "react";
import Header from "./Header";
import { wrapBox } from "../styles/wrap.css";

const Wrap = () => {
  return (
    <div className={wrapBox.wrap}>
      <Header />
    </div>
  );
};

export default Wrap;
