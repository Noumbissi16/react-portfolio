import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    dark: "#ff7308",
    light: "#ffcd69",
  },
  secondary: "#0f1b61",
  black: "#000000",
  React: "#FF7308",
  Redux: "#000000bc",
  Typescript: "#0F1B61",
  NodeJs: "#0000bc",
  ES6: "#fea154",
  HTML: "#E72F09",
  CSS: "#3878F4",
  Bootstrap: "#9038f4",
  Firebase: "#feba54",
  Vercel: "grey",
  ChakraUI: "#31b03e",
  MongoDB: "#124566",
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Inter', sans-serif`,
};

export const myTheme = extendTheme({ colors, fonts });
