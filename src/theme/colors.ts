import { Colors } from "./types";

export const baseColors = {
  failure: "#ed4b4b",
  primary: "#ff8400",
  primaryBright: "#146c09",
  primaryDark: "#fe840a",
  secondary: "#ffa006",
  success: "#ff8400",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f8f8f8",
  backgroundDisabled: "#a8a8a8",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ffa006",
  background: "#2b3344",
  backgroundDisabled: "#4b4e5a",
  contrast: "#FFFFFF",
  invertedContrast: "#212d46",
  input: "#0d1320",
  primaryDark: "#0098A1",
  tertiary: "#212d46",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#fc790e",
  card: "#151b28",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #2a3854 100%)",
  },
};
