import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const modalBox = {
  modalFrame: style({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "1",
  }),
  modalContent: style({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "15px",
    minWidth: "300px",
    maxWidth: "calc(100% - 30px)",
    maxHeight: "calc(100% - 30px)",
    background: theme.color.white,
    borderRadius: "5px",
    zIndex: "1",
  }),
  titleBox: style({
    position: "relative",
    marginBottom: "10px",
    padding: "5px 20px 10px 0",
    borderBottom: `${theme.borderLine.bottomLine} ${theme.color.blue}`,
  }),
  title: style({
    fontSize: theme.fontSizes.size16,
    fontWeight: theme.fontWeight.weight500,
  }),
  itemAdd: style({
    position: "absolute",
    top: "0px",
    right: "0px",
    width: "24px",
    height: "24px",
    textIndent: "-9999px",
    background: `${theme.color.coralBlue} url('../assets/icon_remove.png') no-repeat center`,
    border: theme.borderLine.borderNone,
    borderRadius: theme.borderRadius.r50,
    cursor: "pointer",
    transition: "all ease 0.2s",
    ":hover": {
      transform: "rotate(-45deg)",
    },
  }),
  editTitle: style({
    display: "block",
    fontSize: theme.fontSizes.size15,
  }),
  confirm: style({
    padding: "10px 0 15px",
    fontSize: theme.fontSizes.size16,
    textAlign: "center",
    color: theme.color.navy,
  }),
  modalDim: style({
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    bottom: "0",
    background: theme.color.black,
    opacity: "0.6",
  }),
};
