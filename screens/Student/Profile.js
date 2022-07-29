import React, { useState } from "react";
import {
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useTheme, Text } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { NameFormat } from "../../Utils/NameFormat";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";

const Profile = ({ navigation }) => {
  const { user, loading } = useSelector((state) => state.user);
  const theme = useTheme();

  const [firstname, setFirstname] = useState("SR");
  const [lastname, setLastname] = useState("Joy");
  const [phone, setPhone] = useState("+8801616346835");
  const [address, setAddress] = useState("Baipayl, Dhaka , Bangladesh");

  if (loading) {
    return <Loader />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView>
        <SafeAreaView>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <Image
                source={{ uri: user?.photoURL }}
                style={{
                  height: 128,
                  width: 128,
                  borderRadius: 100,
                }}
              />
              <TouchableOpacity style={{ paddingVertical: 25 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Change Profile Picture
                </Text>
              </TouchableOpacity>
            </View>

            <KeyboardAvoidingView style={{ paddingHorizontal: 25 }}>
              <View
                style={{
                  backgroundColor: theme.colors.cardToggle,
                  ...styles.inputField,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>First Name</Text>
                <TextInput
                  style={{
                    color: theme.colors.text,
                    paddingVertical: 5,
                    fontSize: 14,
                  }}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={firstname}
                  onChangeText={setFirstname}
                />
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.cardToggle,
                  ...styles.inputField,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Last Name</Text>
                <TextInput
                  style={{
                    color: theme.colors.text,
                    paddingVertical: 5,
                    fontSize: 14,
                  }}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={lastname}
                  onChangeText={setLastname}
                />
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.cardToggle,
                  ...styles.inputField,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Phone</Text>
                <TextInput
                  style={{
                    color: theme.colors.text,
                    paddingVertical: 5,
                    fontSize: 14,
                  }}
                  keyboardType="phone-pad"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={phone}
                  onChangeText={setPhone}
                />
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.cardToggle,
                  ...styles.inputField,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Address</Text>
                <TextInput
                  style={{
                    color: theme.colors.text,
                    paddingVertical: 5,
                    fontSize: 14,
                  }}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={address}
                  onChangeText={setAddress}
                />
              </View>
            </KeyboardAvoidingView>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 45 },
  inputField: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 10,
  },
});

export default Profile;
