import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const headerBox = {
  header: style({
    display: "flex",
    justifyContent: theme.layout.justifyContent.between,
    padding: "0 20px",
    height: "60px",
    background: theme.color.aquaBlue,
  }),
  title: style({
    display: "flex",
    alignItems: theme.layout.alignItems.center,
    fontSize: theme.fontSizes.size22,
  }),
};
