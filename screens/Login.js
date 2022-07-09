import { View, StyleSheet } from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";
import { Tab, TabView } from "@rneui/themed";
import Student from "../components/Login/Student";
import Employee from "../components/Login/Employee";

const Login = ({ navigation }) => {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          textAlign: "center",
          marginBottom: 20,
          fontSize: 22,
          fontWeight: "bold",
          paddingTop: "40%",
        }}
      >
        DIU Smart Transport
      </Text>
      <View
        style={{
          height: "45%",
          marginBottom: "15%",
          backgroundColor: "#FFFFFF",
          marginLeft: "10%",
          marginRight: "10%",
          width: "80%",
          borderRadius: 35,
        }}
      >
        <View
          style={{
            flex: 1,
            overflow: "hidden",
          }}
        >
          <Tab
            indicatorStyle={{
              backgroundColor: theme.colors.accent,
              height: 3,
            }}
            containerStyle={(active) => ({
              color: theme.colors.text,
              borderTopLeftRadius: 35,
              borderTopRightRadius: 35,
            })}
            value={index}
            onChange={(e) => setIndex(e)}
            variant="default"
          >
            <Tab.Item
              title="Student"
              style={{
                borderTopLeftRadius: 35,
                borderTopRightRadius: 35,
              }}
              containerStyle={(active) => ({
                backgroundColor: active
                  ? theme.colors.accent
                  : theme.colors.surface,
                borderTopLeftRadius: 35,
              })}
              titleStyle={(active) => ({
                color: active ? "#FFFFFF" : theme.colors.surface,
              })}
            />
            <Tab.Item
              style={{
                borderTopLeftRadius: 35,
                borderTopRightRadius: 35,
              }}
              containerStyle={(active) => ({
                backgroundColor: active
                  ? theme.colors.accent
                  : theme.colors.surface,
                borderTopRightRadius: 35,
              })}
              title="Employee"
              titleStyle={(active) => ({
                color: active ? "#FFFFFF" : theme.colors.surface,
              })}
            />
          </Tab>

          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "center",
              }}
            >
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
