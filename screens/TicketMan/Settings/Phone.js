import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import { useTheme, Text, TextInput } from 'react-native-paper';
import React, { useState } from 'react';

const Phone = () => {
  const theme = useTheme();

  const [phone, setPhone] = useState('');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <KeyboardAvoidingView style={{ paddingHorizontal: 25 }}>
        <View
          style={{
            backgroundColor: theme.colors.cardToggle,
            ...styles.inputField,
          }}
        >
          <TextInput
            backgroundColor={theme.colors.cardToggle}
            label={<Text style={{ color: theme.colors.text }}>Phone(+88)</Text>}
            style={{ margin: 10 }}
            activeUnderlineColor={theme.colors.green} //when this TextInput is active, change its accent color to green
            underlineColor={theme.colors.purple} //when inactive, set color to purple
            value={phone}
            onChangeText={setPhone}
            autoCapitalize="none"
            maxLength={11}
            keyboardType="phone-pad"
          />
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
export default Phone;
