import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

interface CommonStyles {
  [key: string]: string;
}

export const common: CommonStyles = {
  textArea: style({
    padding: "10px",
    width: "100%",
    height: "50px",
    border: `${theme.borderLine.bottomLine} ${theme.color.gray}`,
    borderRadius: theme.borderRadius.r4,
    resize: "vertical",
    boxSizing: "border-box",
  }),
  btn: style({
    flex: "1 1 0%",
    padding: "8px",
    fontSize: theme.fontSizes.size13,
    fontWeight: theme.fontWeight.weight600,
    color: theme.color.darkGray,
    background: theme.color.white,
    border: `${theme.borderLine.bottomLine} ${theme.color.darkGray}`,
    borderRadius: theme.borderRadius.r4,
    cursor: "pointer",
  }),
  active: style({
    color: theme.color.white,
    background: theme.color.blue,
    border: theme.borderLine.borderNone,
  }),
};
