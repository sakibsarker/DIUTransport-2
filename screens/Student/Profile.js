import React from "react";
import {
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useTheme, Text } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { NameFormat } from "../../Utils/NameFormat";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Reducers/user";
import Loader from "../../components/Loader";

const Profile = ({ navigation }) => {
  const { user, loading } = useSelector((state) => state.user);
  console.log(user);
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  if (loading) {
    return <Loader />;
  }

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
          ></View>

          <View
            style={{
              backgroundColor: theme.colors.cardToggle,
              padding: 40,

              borderRadius: 20,
              position: "relative",
            }}
          >
            <Image
              source={{ uri: user?.photoURL }}
              style={{
                height: 64,
                width: 64,
                borderRadius: 40,
                marginBottom: 10,
                position: "absolute",
                backgroundColor: theme.colors.surfaceToggle,
                left: "50%",
                marginLeft: 8,
                top: -38,
                borderRadius: 100,
              }}
            />

            <View
              style={{
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", paddingHorizontal: 50 }}>
                {NameFormat(user?.displayName)}
              </Text>
              {/* <Text style={{ paddingHorizontal: 50 }}>
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text> */}
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Tickets")}
              style={{
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.accent,
                  borderRadius: 100,
                  padding: 10,
                }}
              >
                <FontAwesome5
                  size={15}
                  color={theme.colors.White}
                  name="user"
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "700",
                  }}
                >
                  Tickets
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("favourites")}
              style={{
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.accent,
                  borderRadius: 100,
                  padding: 10,
                }}
              >
                <FontAwesome5
                  size={15}
                  color={theme.colors.White}
                  name="heart"
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "700",
                  }}
                >
                  Favourites
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={handleLogout}
            >
              <View
                style={{
                  backgroundColor: theme.colors.accent,
                  borderRadius: 100,
                  padding: 10,
                }}
              >
                <FontAwesome
                  size={15}
                  color={theme.colors.White}
                  name="sign-out"
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "700" }}>Logout</Text>
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
