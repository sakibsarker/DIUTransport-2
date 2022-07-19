import React, { useEffect } from "react";
import { List, useTheme, Text, Surface } from "react-native-paper";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { fetchBuses } from "../../redux/ApiCalls/bus";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const BusList = ({ navigation, route }) => {
  const theme = useTheme();

  // const dispatch = useDispatch();
  // const { buses, loading, error } = useSelector((state) => state.bus);

  // useEffect(() => {
  //   dispatch(fetchBuses());
  //   if (error) {
  //     console.log(error);
  //   }
  // }, [error]);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <ScrollView>
      {/* <Text>{route.params?.routeId}</Text> */}
      <TouchableOpacity
        elevation={5}
        style={{
          padding: 25,
          backgroundColor: theme.colors.cardToggle,
          borderRadius: 20,
          margin: 15,
        }}
        onPress={() =>
          navigation.navigate("BusDetails", {
            busId: "surjomukhi22",
            routeId: route.params?.routeId,
          })
        }
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                marginBottom: 7,
                fontWeight: "bold",
                color: theme.colors.accentToggle,
              }}
            >
              ShurjoMukhi17
            </Text>
            <FontAwesome5
              name="bus"
              size={25}
              color={theme.colors.White}
              style={{
                backgroundColor: theme.colors.accent,
                borderRadius: 50,
                padding: 10,
              }}
            />
          </View>
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome5
                size={15}
                name="location-arrow"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>Ashulia to DSA</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome5
                size={15}
                name="unlock-alt"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>07:00AM - 9:00AM</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                size={15}
                name="power-off"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>Returing</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        elevation={5}
        style={{
          padding: 25,
          backgroundColor: theme.colors.cardToggle,
          borderRadius: 20,
          margin: 15,
        }}
        onPress={() =>
          navigation.navigate("BusDetails", {
            busId: "surjomukhi22",
            routeId: route.params?.routeId,
          })
        }
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                marginBottom: 7,
                fontWeight: "bold",
                color: theme.colors.accentToggle,
              }}
            >
              ShurjoMukhi17
            </Text>
            <FontAwesome5
              name="bus"
              size={25}
              color={theme.colors.White}
              style={{
                backgroundColor: theme.colors.accent,
                borderRadius: 50,
                padding: 10,
              }}
            />
          </View>
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome5
                size={15}
                name="location-arrow"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>Ashulia to DSA</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome5
                size={15}
                name="unlock-alt"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>07:00AM - 9:00AM</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                size={15}
                name="power-off"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>Returing</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        elevation={5}
        style={{
          padding: 25,
          backgroundColor: theme.colors.cardToggle,
          borderRadius: 20,
          margin: 15,
        }}
        onPress={() =>
          navigation.navigate("BusDetails", {
            busId: "surjomukhi22",
            routeId: route.params?.routeId,
          })
        }
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                marginBottom: 7,
                fontWeight: "bold",
                color: theme.colors.accentToggle,
              }}
            >
              ShurjoMukhi17
            </Text>
            <FontAwesome5
              name="bus"
              size={25}
              color={theme.colors.White}
              style={{
                backgroundColor: theme.colors.accent,
                borderRadius: 50,
                padding: 10,
              }}
            />
          </View>
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome5
                size={15}
                name="location-arrow"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>Ashulia to DSA</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome5
                size={15}
                name="unlock-alt"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>07:00AM - 9:00AM</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                size={15}
                name="power-off"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>Returing</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        elevation={5}
        style={{
          padding: 25,
          backgroundColor: theme.colors.cardToggle,
          borderRadius: 20,
          margin: 15,
        }}
        onPress={() =>
          navigation.navigate("BusDetails", {
            busId: "surjomukhi22",
            routeId: route.params?.routeId,
          })
        }
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                marginBottom: 7,
                fontWeight: "bold",
                color: theme.colors.accentToggle,
              }}
            >
              ShurjoMukhi17
            </Text>
            <FontAwesome5
              name="bus"
              size={25}
              color={theme.colors.White}
              style={{
                backgroundColor: theme.colors.accent,
                borderRadius: 50,
                padding: 10,
              }}
            />
          </View>
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome5
                size={15}
                name="location-arrow"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>Ashulia to DSA</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome5
                size={15}
                name="unlock-alt"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>07:00AM - 9:00AM</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                size={15}
                name="power-off"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>Returing</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        elevation={5}
        style={{
          padding: 25,
          backgroundColor: theme.colors.cardToggle,
          borderRadius: 20,
          margin: 15,
        }}
        onPress={() =>
          navigation.navigate("BusDetails", {
            busId: "surjomukhi22",
            routeId: route.params?.routeId,
          })
        }
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                marginBottom: 7,
                fontWeight: "bold",
                color: theme.colors.accentToggle,
              }}
            >
              ShurjoMukhi17
            </Text>
            <FontAwesome5
              name="bus"
              size={25}
              color={theme.colors.White}
              style={{
                backgroundColor: theme.colors.accent,
                borderRadius: 50,
                padding: 10,
              }}
            />
          </View>
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome5
                size={15}
                name="location-arrow"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>Ashulia to DSA</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome5
                size={15}
                name="unlock-alt"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>07:00AM - 9:00AM</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                size={15}
                name="power-off"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>Returing</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        elevation={5}
        style={{
          padding: 25,
          backgroundColor: theme.colors.cardToggle,
          borderRadius: 20,
          margin: 15,
        }}
        onPress={() =>
          navigation.navigate("BusDetails", {
            busId: "surjomukhi22",
            routeId: route.params?.routeId,
          })
        }
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                marginBottom: 7,
                fontWeight: "bold",
                color: theme.colors.accentToggle,
              }}
            >
              ShurjoMukhi17
            </Text>
            <FontAwesome5
              name="bus"
              size={25}
              color={theme.colors.White}
              style={{
                backgroundColor: theme.colors.accent,
                borderRadius: 50,
                padding: 10,
              }}
            />
          </View>
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome5
                size={15}
                name="location-arrow"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>Ashulia to DSA</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome5
                size={15}
                name="unlock-alt"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>07:00AM - 9:00AM</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                size={15}
                name="power-off"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>Returing</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        elevation={5}
        style={{
          padding: 25,
          backgroundColor: theme.colors.cardToggle,
          borderRadius: 20,
          margin: 15,
        }}
        onPress={() =>
          navigation.navigate("BusDetails", {
            busId: "surjomukhi22",
            routeId: route.params?.routeId,
          })
        }
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                marginBottom: 7,
                fontWeight: "bold",
                color: theme.colors.accentToggle,
              }}
            >
              ShurjoMukhi17
            </Text>
            <FontAwesome5
              name="bus"
              size={25}
              color={theme.colors.White}
              style={{
                backgroundColor: theme.colors.accent,
                borderRadius: 50,
                padding: 10,
              }}
            />
          </View>
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome5
                size={15}
                name="location-arrow"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>Ashulia to DSA</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <FontAwesome5
                size={15}
                name="unlock-alt"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>07:00AM - 9:00AM</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                size={15}
                name="power-off"
                color={theme.colors.accent}
              />
              <Text style={{ marginLeft: 10 }}>Returing</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BusList;
