import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const sectionBox = {
  section: style({
    height: "calc(100% - 60px)",
    background: theme.color.white,
  }),
};
