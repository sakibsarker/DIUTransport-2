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
    accent: "#182C61",
    tabActiveColor: "#74b9ff",
    tabInactiveColor: "#dfe6e9",
    accentLight: "#b2bec3",
    White: "#FFFFFF",
  },
};

export const themeDark = {
  ...PaperDarkTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    accent: "#000",
    tabActiveColor: "#FFF",
    tabInactiveColor: "#2C3A47",
    White: "#FFFFFF",
  },
};
