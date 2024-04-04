import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const wrapBox = {
  wrap: style({
    position: "absolute",
    top: "50px",
    left: "50%",
    bottom: "50px",
    transform: "translateX(-50%)",
    paddingTop: "4px",
    maxWidth: "calc(100% - 100px)",
    width: "1200px",
    borderRadius: theme.borderRadius.r7,
    boxShadow: theme.boxShadow.normal,
    overflow: "hidden",
    boxSizing: "border-box",
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
