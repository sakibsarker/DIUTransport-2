import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {  useState } from 'react'
import { Button ,useTheme} from 'react-native-paper'

const Login = ({ navigation }) => {
    const theme = useTheme();
    

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = () => {
        navigation.navigate("home");
        console.log(email,password)
    }


    return (
        <>
            <View
            style={{
                flex: 1,
                backgroundColor: theme?.colors.surface,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text style={{ fontSize: 20, margin: 20 }}>DIU Smart Transport</Text>
            <View style={{ width: "70%" }}>
                <TextInput
                    style={Styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    secureTextEntry
                    style={Styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <Button
                disabled={!email || !password}
                style={{...Styles.btn,backgroundColor:theme?.colors.accent}}
                onPress={loginHandler}
            >
                <Text style={{ color: "#fff" }}>Login</Text>
            </Button>

            <Text
                style={{
                    marginTop: 20,
                }}
            >
                Don't Have a Account Yet ?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("register")}>
                <Text
                    style={{
                        color: theme?.colors.accent,
                        height: 30,
                        margin: 20,
                    }}
                >
                    Sign Up
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("forgetpassword")}>
                <Text  >  Forget Password   </Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

export default Login


const Styles = StyleSheet.create({

    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#b5b5b5",
        padding: 10,
        paddingLeft: 15,
        borderRadius: 5,
        marginVertical: 15,
        fontSize: 15,
    },

    btn: {
        padding: 5,
        width: "70%",
    },
})