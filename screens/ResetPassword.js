import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, {  useState } from 'react'
import { Button,useTheme } from 'react-native-paper';


const ResetPassword = ({ navigation }) => {

    const theme = useTheme();


    const [otp, setOtp] = useState();
    const [newPassword, setNewPassword] = useState();


    const changePasswordHandler = async () => {
        // Reset Password Request
        navigation.navigate("login");
    }


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme?.colors.surface,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text style={{ fontSize: 20, margin: 20 }}>Change Password</Text>
            <View style={{ width: "70%" }}>
                <TextInput
                    style={Styles.input}
                    placeholder="OTP"
                    value={otp}
                    onChangeText={setOtp}
                    keyboardType="number-pad"
                />

                <TextInput
                    secureTextEntry
                    style={Styles.input}
                    placeholder="New Password"
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
            </View>

            <Button
                style={{...Styles.btn,backgroundColor:theme?.colors.accent}}
                onPress={changePasswordHandler}
                color="#fff"
            >
                Reset Password
            </Button>



        </View>
    )
}

export default ResetPassword


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