import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface, useTheme, Divider } from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const RecentTickets = () => {
  const theme = useTheme();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      //   contentContainerStyle={{ justifyContent: 'space-between' }}
    >
      <Surface
        elevation={5}
        style={{
          padding: 35,
          borderRadius: 20,
          marginLeft: 25,
          marginTop: 20,
          marginBottom: 15,
          backgroundColor: theme.colors.cardToggle,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
          }}
        >
          <EvilIcons name="calendar" size={25} color={theme.colors.text} />
          <Text style={{ marginLeft: 5 }}>18-Jun,2000</Text>
        </View>

        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>25 TK</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <EvilIcons name="location" size={25} color={theme.colors.text} />
          <Text>Jamgora To DSC</Text>
        </View>
      </Surface>
      <Surface
        elevation={5}
        style={{
          padding: 35,
          borderRadius: 20,
          marginLeft: 25,
          marginTop: 20,
          marginBottom: 15,
          backgroundColor: theme.colors.cardToggle,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
          }}
        >
          <EvilIcons name="calendar" size={25} color={theme.colors.text} />
          <Text style={{ marginLeft: 5 }}>18-Jun,2000</Text>
        </View>

        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>25 TK</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <EvilIcons name="location" size={25} color={theme.colors.text} />
          <Text>Jamgora To DSC</Text>
        </View>
      </Surface>
      <Surface
        elevation={5}
        style={{
          padding: 35,
          borderRadius: 20,
          marginLeft: 25,
          marginTop: 20,
          marginBottom: 15,
          backgroundColor: theme.colors.cardToggle,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
          }}
        >
          <EvilIcons name="calendar" size={25} color={theme.colors.text} />
          <Text style={{ marginLeft: 5 }}>18-Jun,2000</Text>
        </View>

        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>25 TK</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <EvilIcons name="location" size={25} color={theme.colors.text} />
          <Text>Jamgora To DSC</Text>
        </View>
      </Surface>
      <Surface
        elevation={5}
        style={{
          padding: 35,
          borderRadius: 20,
          marginLeft: 25,
          marginTop: 20,
          marginBottom: 15,
          backgroundColor: theme.colors.cardToggle,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
          }}
        >
          <EvilIcons name="calendar" size={25} color={theme.colors.text} />
          <Text style={{ marginLeft: 5 }}>18-Jun,2000</Text>
        </View>

        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>25 TK</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <EvilIcons name="location" size={25} color={theme.colors.text} />
          <Text>Jamgora To DSC</Text>
        </View>
      </Surface>
    </ScrollView>
  );
};

export default RecentTickets;
