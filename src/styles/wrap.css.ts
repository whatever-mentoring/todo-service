import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const wrapBox = {
  wrap: style({
    position: "relative",
    top: "50px",
    margin: "auto",
    paddingTop: "4px",
    maxWidth: "calc(100% - 100px)",
    width: "1200px",
    height: "calc(100vh - 100px)",
    borderRadius: theme.borderRadius.r7,
    boxShadow: theme.boxShadow.normal,
    boxSizing: "border-box",
    overflow: "hidden",
    "::after": {
      content: "",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      height: "4px",
      background: theme.color.blue,
    },
  }),
};
