import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Alert,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Text, useTheme } from "react-native-paper";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const NewPasswordScreen = ({ navigation }) => {
  const theme = useTheme();
  const { control, handleSubmit } = useForm();

  const onSubmitPressed = async (data) => {
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      navigation.navigate("SignIn");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>

            <CustomInput
              placeholder="Username"
              name="username"
              control={control}
              rules={{ required: "Username is required" }}
            />

            <CustomInput
              placeholder="Code"
              name="code"
              control={control}
              rules={{ required: "Code is required" }}
            />

            <CustomInput
              placeholder="Enter your new password"
              name="password"
              control={control}
              secureTextEntry
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password should be at least 8 characters long",
                },
              }}
            />

            <CustomButton
              text="Submit"
              onPress={handleSubmit(onSubmitPressed)}
            />

            <CustomButton
              text="Back to Sign in"
              onPress={onSignInPress}
              type="TERTIARY"
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default NewPasswordScreen;
