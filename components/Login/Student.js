import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { ResponseType } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../../Configs/firebase";
import { Text, useTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { googleLogin } from "../../redux/Reducers/user";

WebBrowser.maybeCompleteAuthSession();

const Student = ({ navigation }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "856741678354-lf9gun9ska1vrd9i006gana26rbnq25e.apps.googleusercontent.com",
    scopes: ["openid", "https://www.googleapis.com/auth/userinfo.profile"],
  });

  React.useEffect(() => {
    WebBrowser.warmUpAsync();
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);

          const user = result.user;
          dispatch(
            googleLogin({
              user: user.providerData[0],
              token: user.stsTokenManager.accessToken,
            })
          );
        })
        .catch((error) => {
          dispatch(
            googleLogin({
              error: error,
            })
          );
          console.log(error);
        });
    }
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, [response]);

  return (
    <View style={{ alignItems: "center", backgroundColor: "#fff", flex: 1 }}>
      <Text style={{ marginBottom: 30 }}>Only University Email is allowed</Text>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.accent,
          borderRadius: 20,
          paddingHorizontal: 20,
          paddingVertical: 5,
        }}
        onPress={() => {
          promptAsync({
            useProxy: true,
          });
        }}
      >
        <Image
          source={{
            uri: "https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1533665793/ogdensdorg/p6ckkwxkxi8zd03ja8h0/GoogleButton.png",
            width: 60,
            height: 60,
            resizeMode: "stretch",
          }}
        />
        <Text style={{ color: theme.colors.cardToggle }}>
          Sign In With Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Student;
