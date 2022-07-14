import {
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { logout } from "../../redux/Reducers/user";

const Profile = ({ navigation }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  if (loading) {
    return <Loader />;
  }

  const handleLogout = () => {
    dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "login",
        },
      ],
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "column",
              marginBottom: 20,
            }}
          >
            <FontAwesome5 size={40} color={theme.colors.accent} name="bus" />
            <Text style={styles.profileName}>SurjoMukhi-15</Text>
            <Text style={styles.profileName}>{user.name}</Text>
            <Text style={styles.profileName}>ID: {user.employeeId}</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "column",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              Date: {new Date().toLocaleString()}
            </Text>
          </View>
          <View style={{}}>
            <View
              style={{
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View>
                <FontAwesome5
                  size={25}
                  color={theme.colors.accent}
                  name="user"
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 20 }}>Total Student : 30 </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={handleLogout}
              style={{
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View>
                <FontAwesome
                  size={25}
                  color={theme.colors.accent}
                  name="sign-out"
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  profileName: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Profile;
