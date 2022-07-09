import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

export const themeLight = {
  ...PaperDefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    accent: "#636e72",
    tabActiveColor: "#fff",
    tabInactiveColor: "#dfe6e9",
  },
};

export const themeDark = {
  ...PaperDarkTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    accent: "#636e72",
    tabActiveColor: "#fff",
    tabInactiveColor: "#dfe6e9",
  },
};
