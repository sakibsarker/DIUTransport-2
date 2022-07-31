import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useTheme, Text } from 'react-native-paper';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const ChangePassword = () => {
  const theme = useTheme();

  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <KeyboardAvoidingView style={{ paddingHorizontal: 15 }}>
        <View
          style={{
            backgroundColor: theme.colors.cardToggle,
            ...styles.inputField,
          }}
        >
          <View>
            <TextInput
              secureTextEntry={!showPassword}
              backgroundColor={theme.colors.cardToggle}
              label={<Text style={{ color: theme.colors.text }}>Password</Text>}
              style={{ margin: 10 }}
              activeUnderlineColor={theme.colors.green} //when this TextInput is active, change its accent color to green
              underlineColor={theme.colors.purple} //when inactive, set color to purple
              value={password}
              maxLength={32}
              onChangeText={setPassword}
              autoCapitalize="none"
            />

            {/* <TextInput
              secureTextEntry={!showPassword}
              style={{
                borderWidth: 0.5,
                borderColor: '#b5b5b5',
                padding: 5,
                paddingLeft: 10,
                borderRadius: 5,
                fontSize: 15,
              }}
              placeholder="Password"
              value={password}
              maxLength={32}
              onChangeText={setPassword}
              autoCapitalize="none"
            /> */}
            <Icon
              onPress={() => setShowPassword(!showPassword)}
              color={theme.colors.text}
              style={{
                position: 'absolute',
                alignItems: 'center',

                right: 0,
                bottom: 20,
                fontSize: 20,
                paddingRight: 15,
              }}
              name={showPassword ? 'md-eye' : 'md-eye-off'}
            />
          </View>
          <View style={{ marginVertical: 20 }}>
            <TextInput
              secureTextEntry={!showPassword}
              backgroundColor={theme.colors.cardToggle}
              label={
                <Text style={{ color: theme.colors.text }}>
                  Confirm password
                </Text>
              }
              style={{ margin: 10 }}
              activeUnderlineColor={theme.colors.green} //when this TextInput is active, change its accent color to green
              underlineColor={theme.colors.purple} //when inactive, set color to purple
              value={confirmPassword}
              maxLength={32}
              onChangeText={setconfirmPassword}
              autoCapitalize="none"
            />
            {/* <TextInput
              secureTextEntry={!showPassword}
              style={{
                width: '100%',

                borderWidth: 0.5,
                borderColor: '#b5b5b5',
                padding: 5,
                paddingLeft: 10,
                borderRadius: 5,
                fontSize: 15,
              }}
              placeholder="Confirm Password"
              value={confirmPassword}
              maxLength={32}
              onChangeText={setconfirmPassword}
              autoCapitalize="none"
            /> */}
            <Icon
              onPress={() => setShowPassword(!showPassword)}
              color={theme.colors.text}
              style={{
                position: 'absolute',
                alignItems: 'center',

                right: 0,
                bottom: 20,
                fontSize: 20,
                paddingRight: 15,
              }}
              name={showPassword ? 'md-eye' : 'md-eye-off'}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
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
export default ChangePassword;
