import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Button, useTheme, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { loginEmployee } from "../../redux/ApiCalls/user";
import Icon from "react-native-vector-icons/Ionicons";
import Loader from "../Loader";

const TicketMan = ({ navigation }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { user, loading, error } = useSelector((state) => state.user);

  const [TicketManId, setTicketManId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = () => {
    dispatch(loginEmployee({ employeeId: TicketManId, password }));
  };

  React.useEffect(() => {
    if (loading) {
      console.log("Loading..");
    } else if (!loading && user) {
      console.log(user);
      navigation.replace("TicketManStack", { user });
    } else if (error) {
      Alert.alert("Error!", error);
    }
  }, [error, user, navigation, loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <View
      style={{
        width: "80%",
      }}
    >
      <View>
        <View style={Styles.field}>
          <TextInput
            style={Styles.input}
            placeholder="TicketMan ID"
            value={TicketManId}
            onChangeText={setTicketManId}
            keyboardType="number-pad"
          />
        </View>
        <View style={Styles.field}>
          <TextInput
            secureTextEntry={!showPassword}
            style={Styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <Icon
            onPress={() => setShowPassword(!showPassword)}
            style={Styles.eye}
            name={showPassword ? "md-eye-off" : "md-eye"}
          />
        </View>
      </View>

      <Button
        disabled={!TicketManId || !password}
        style={{ ...Styles.btn, backgroundColor: theme?.colors.accent }}
        onPress={loginHandler}
      >
        <Text style={{ color: "#fff" }}>Login</Text>
      </Button>
    </View>
  );
};

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
  },
  eye: {
    position: "absolute",
    right: 0,
    bottom: 25,
    fontSize: 25,
    padding: 10,
    paddingRight: 15,
  },
  field: {
    paddingVertical: 14,
    position: "relative",
  },
});

export default TicketMan;
