import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { useTheme, Text } from 'react-native-paper';
import { Tab, TabView } from '@rneui/themed';
import Student from '../components/Login/Student';
import TicketMan from '../components/Login/TicketMan';

const Login = ({ navigation }) => {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView>
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 10,
            fontSize: 22,
            fontWeight: 'bold',
            paddingTop: '30%',
          }}
        >
          DIU Smart Transport
        </Text>
        <View
          style={{
            height: '55%',
            marginBottom: '25%',
            backgroundColor: '#FFFFFF',
            marginLeft: '10%',
            marginRight: '10%',
            width: '80%',
            borderRadius: 30,
          }}
        >
          <View
            style={{
              flex: 1,
              overflow: 'hidden',
            }}
          >
            <Tab
              indicatorStyle={{
                backgroundColor: theme.colors.accent,
                height: 5,
              }}
              containerStyle={(active) => ({
                color: theme.colors.text,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
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
                  color: active ? theme.colors.White : theme.colors.accent,
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
                title="TicketMan"
                titleStyle={(active) => ({
                  color: active ? theme.colors.White : theme.colors.accent,
                })}
              />
            </Tab>

            <TabView value={index} onChange={setIndex} animationType="spring">
              <TabView.Item
                style={{
                  justifyContent: 'center',
                  flex: 1,
                  alignItems: 'center',
                }}
              >
                <Student navigation={navigation} />
              </TabView.Item>
              <TabView.Item
                style={{
                  justifyContent: 'center',
                  flex: 1,
                  alignItems: 'center',
                }}
              >
                <TicketMan navigation={navigation} />
              </TabView.Item>
            </TabView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const Styles = StyleSheet.create({});
