import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button,useTheme } from 'react-native-paper'


const ForgetPassword = ({ navigation }) => {

    const theme = useTheme();

    const [email, setEmail] = useState("");



    const forgetHandler = async () => {
        // Send mail
        navigation.navigate("resetpassword")

    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor:theme?.colors.surface,
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


            </View>

            <Button
                style={{...Styles.btn,backgroundColor:theme?.colors.accent}}
                onPress={forgetHandler}
                color="#fff"
            >
                Send Email
            </Button>



        </View>
    )
}




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
        backgroundColor: "#900",
        padding: 5,
        width: "70%",
    },
})

export default ForgetPassword