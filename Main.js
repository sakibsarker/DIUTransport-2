import React from "react";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import merge from "deepmerge";
import { PreferencesContext } from "./contexts/PreferencesContext ";
import { themeLight, themeDark } from "./Configs/theme";
import Root from "./navigation/Root";
import { KeyboardAvoidingView, Platform } from "react-native";

const CombinedDefaultTheme = merge(themeLight, NavigationDefaultTheme);
const CombinedDarkTheme = merge(themeDark, NavigationDarkTheme);

const Main = () => {
  const [isThemeDark, setIsThemeDark] = React.useState(false);
  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme} independent={true}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Root />
          </KeyboardAvoidingView>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default Main;
