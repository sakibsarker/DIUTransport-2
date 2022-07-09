import { View, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";
import { Tab, TabView } from "@rneui/themed";
import Student from "../components/Login/Student";
import Employee from "../components/Login/Employee";

const Login = ({ navigation }) => {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
      <View
        style={{
          height: "45%",
          marginTop: "40%",
          marginBottom: "15%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            marginBottom: 20,
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          DIU Smart Transport
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            justifyContent: "center",
            marginLeft: "15%",
            marginRight: "15%",
            overflow: "hidden",
          }}
        >
          <Tab value={index} onChange={(e) => setIndex(e)} variant="primary">
            <Tab.Item
              title="Student"
              icon={{ name: "moon", type: "ionicon", color: "white" }}
            />
            <Tab.Item
              title="Employee"
              icon={{ name: "man", type: "ionicon", color: "white" }}
            />
          </Tab>

          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item>
              <Student />
            </TabView.Item>
            <TabView.Item
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "center",
              }}
            >
              <Employee />
            </TabView.Item>
          </TabView>
        </View>
      </View>
    </View>
  );
};

export default Login;

const Styles = StyleSheet.create({});
