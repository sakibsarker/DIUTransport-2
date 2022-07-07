import React from "react"
import { NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native"
import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
    Provider as PaperProvider,
  } from 'react-native-paper';
import merge from 'deepmerge';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './screens/Home'
import Profile from "./screens/Profile"
import MyMap from "./screens/MyMap"
import Login from "./screens/Login"
import Footer from "./components/Footer"
import { PreferencesContext } from './contexts/PreferencesContext ';
import Register from "./screens/register";
import ForgetPassword from "./screens/ForgotPassword";
import ResetPassword from "./screens/ResetPassword";
import {  useSelector } from 'react-redux';


const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
const Stack = createNativeStackNavigator()

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



    const isAuthenticated = true;

    return (

        <PreferencesContext.Provider value={preferences}>
            <PaperProvider theme={theme}>

                <NavigationContainer theme={theme}> 

                        <Stack.Navigator initialRouteName={isAuthenticated ? "home" : "login"}>
                        <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
                        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name='mymap' component={MyMap} options={{ headerShown: false }} />
                        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
                        <Stack.Screen name='profile' component={Profile} options={{ headerShown: false }} />
                        <Stack.Screen name='forgetpassword' component={ForgetPassword} options={{ headerShown: false }} />
                        <Stack.Screen name='resetpassword' component={ResetPassword} options={{ headerShown: false }} />


                    </Stack.Navigator>
                    {isAuthenticated && <Footer />}



                </NavigationContainer> 

            </PaperProvider>
        </PreferencesContext.Provider>
    )
}

export default Main