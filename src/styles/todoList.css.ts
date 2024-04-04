import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const listBox = {
  list: style({
    display: "flex",
    justifyContent: theme.layout.justifyContent.between,
    gap: "24px",
    padding: "20px",
    height: "100%",
    boxSizing: "border-box",
  }),
  item: style({
    position: "relative",
    flex: "1 1 0%",
    padding: "15px",
    height: "100%",
    background: theme.color.gray,
    borderRadius: theme.borderRadius.r7,
    boxSizing: "border-box",
  }),
  itemTitle: style({
    display: "block",
    marginBottom: "20px",
    fontSize: theme.fontSizes.size18,
    fontWeight: "600",
    color: theme.color.navy,
  }),
  itemAdd: style({
    position: "absolute",
    top: "15px",
    right: "15px",
    width: "24px",
    height: "24px",
    textIndent: "-9999px",
    background: `${theme.color.coralBlue} url('../assets/icon_add.png') no-repeat center`,
    border: theme.borderLine.borderNone,
    borderRadius: theme.borderRadius.r50,
    cursor: "pointer",
    transition: "all ease 0.2s",
    ":hover": {
      transform: "rotate(-45deg)",
    },
  }),
};
