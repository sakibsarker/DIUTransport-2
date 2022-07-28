import {
  View,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useTheme, Text, Divider } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome5";
import Student from "../../components/Login/Student";
import TicketMan from "../../components/Login/TicketMan";
import Register from "./Register";
const Stack = createNativeStackNavigator();
const Login = ({ navigation }) => {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);
  const [loginStack, setLoginStack] = React.useState("Student");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        paddingVertical: 25,
        marginHorizontal: 30,
        position: "relative",
      }}
    >
      <View
        style={{
          borderRadius: 25,
          paddingVertical: 25,
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <View style={{ height: "50%" }}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/images/tlogo.png")}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 25,
              }}
            />
            <Text
              style={{
                textAlign: "center",
                marginBottom: 25,
                fontSize: 22,
                fontWeight: "bold",
                borderBottomColor: theme.colors.accent,
                borderBottomWidth: 5,
              }}
            >
              DIU Smart Transport
            </Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Student" component={Student} />
              <Stack.Screen name="StudentRegister" component={Register} />
              <Stack.Screen name="TicketMan" component={TicketMan} />
            </Stack.Navigator>
          </View>
        </View>
      </View>
      <View style={{ position: "absolute", bottom: "10%", right: "10%" }}>
        {loginStack === "Student" ? (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              navigation.replace("TicketMan");
              setLoginStack("TicketMan");
            }}
          >
            <Text style={{ marginRight: 10, fontWeight: "bold" }}>
              TicketMan
            </Text>
            <Icon
              name="sign-in-alt"
              size={25}
              color={theme.colors.accent}
            ></Icon>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              navigation.replace("Student");
              setLoginStack("Student");
            }}
          >
            <Text style={{ marginRight: 10, fontWeight: "bold" }}>Student</Text>
            <Icon
              name="sign-in-alt"
              size={25}
              color={theme.colors.accent}
            ></Icon>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Login;

const Styles = StyleSheet.create({});
