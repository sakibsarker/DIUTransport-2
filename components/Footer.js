import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native"
import { useTheme} from 'react-native-paper'
const Footer = () => {
    const theme = useTheme();

    const navigation = useNavigation()

    return (
        <View
            style={{
                padding: 30,
                backgroundColor: theme?.colors.accent,
                flexDirection: "row",
                justifyContent: "space-around",
                borderTopLeftRadius:30,
                borderTopRightRadius:30
            }}
        >
            <TouchableOpacity onPress={() => navigation.navigate("mymap")}>
                <Icon name="map" size={30} color={theme?.colors.surface} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("home")}>
                <Icon name="home" size={30} color={theme?.colors.surface} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                <Icon name="user" size={30} color={theme?.colors.surface} />
            </TouchableOpacity>
        </View>
    )
}

export default Footer