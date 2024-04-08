import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  layout: {
    justifyContent: {
      center: "center",
      start: "flex-start",
      end: "flex-end",
      between: "space-between",
      around: "space-around",
    },
    alignItems: {
      center: "center",
      start: "flex-start",
      end: "flex-end",
      stretch: "stretch",
    },
  },
  color: {
    black: "#000000",
    white: "#ffffff",
    blue: "#0d6ff8",
    skyBlue: "#ecf1f9",
    aquaBlue: "#e7f0fd",
    coralBlue: "#c3d7f8",
    navy: "#20273d",
    gray: "#f1f3f9",
    darkGray: "#606781",
    deepGray: "#d8dde7",
    lightGray: "#dfe1e7",
  },
  fontSizes: {
    size32: "3.2rem",
    size22: "2.2rem",
    size18: "1.8rem",
    size16: "1.6rem",
    size15: "1.5rem",
    size14: "1.4rem",
    size13: "1.3rem",
    size12: "1.2rem",
  },
  fontWeight: {
    weight300: "300",
    weight400: "400",
    weight500: "500",
    weight600: "600",
    weight700: "700",
  },
  borderRadius: {
    r4: "4px",
    r7: "7px",
    r10: "10px",
    r50: "50px",
  },
  borderLine: {
    borderNone: "none",
    bottomLine: "1px solid",
  },
  boxShadow: {
    normal: "0px 3px 15px 2px rgba(0,0,0,0.1)",
    small: "0px 2px 8px 0px rgba(0,0,0,0.1)",
  },
});
