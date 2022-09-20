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
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import Root from "./navigation/Root";
import { KeyboardAvoidingView, Platform } from "react-native";
import { NativeBaseProvider } from "native-base";
const CombinedDefaultTheme = merge(themeLight, NavigationDefaultTheme);
const CombinedDarkTheme = merge(themeDark, NavigationDarkTheme);
Amplify.configure(awsconfig);

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
      <NativeBaseProvider>
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
      </NativeBaseProvider>
    </PreferencesContext.Provider>
  );
};

export default Main;
