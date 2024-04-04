import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./theme.css";

globalStyle("html,body", {
  margin: 0,
  padding: 0,
  fontSize: "62.5%",
  fontFamily: "'docs-Roboto', Helvetica, Arial, sans-serif",
});

globalStyle("*", {
  margin: 0,
  padding: 0,
});

globalStyle("#root", {
  height: "100vh",
  background: theme.color.skyBlue,
});

globalStyle("a", {
  textDecoration: "none",
});

globalStyle("a:hover", {
  textDecoration: "underline",
});

globalStyle("ul", {
  margin: "0px",
  padding: "0px",
  listStyle: "none",
});
