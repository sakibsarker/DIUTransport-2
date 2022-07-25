import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Alert,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Text, Button, useTheme } from "react-native-paper";
import { isValidScanData } from "../../Utils/checkScanData";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMessage,
  enqueuee,
  removeEverything,
} from "../../redux/Reducers/scanQueuee";

const TicketScan = ({ navigation }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { q, count, message } = useSelector((state) => state.scanQueuee);
  const [hasCameraPermission, setCameraPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const [value, setValue] = useState(null);

  const [animationLineHeight, setAnimationLineHeight] = useState(0);
  const [focusLineAnimation, setFocusLineAnimation] = useState(
    new Animated.Value(0)
  );

  useEffect(() => {
    if (message) {
      Alert.alert("Info", message);
      dispatch(clearMessage());
    }
  }, [dispatch, message]);

  useEffect(() => {
    getPermissionsAsync();
    animateLine();
  }, []);

  const animateLine = () => {
    Animated.sequence([
      Animated.timing(focusLineAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(focusLineAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(animateLine);
  };

  const getPermissionsAsync = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    const isPermissionGranted = status === "granted";
    console.log(isPermissionGranted);
    setCameraPermission(isPermissionGranted);
  };

  const handleBarCodeScanned = ({ type, data }) => {
    dispatch(enqueuee(data));
    setScanned(true);
  };

  if (hasCameraPermission === null) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasCameraPermission === false) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  if (q && scanned) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ScanHistory")}
          style={{
            backgroundColor: theme.colors.accent,
            borderRadius: 360,
          }}
        >
          <Text
            style={{
              color: theme.colors.cardToggle,
              padding: 30,
            }}
          >
            {count}
          </Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={() => setScanned(false)}>
            <Button>Tap to Scan Again ?</Button>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.overlay}>
          <View style={styles.unfocusedContainer}></View>
          <View style={styles.middleContainer}>
            <View style={styles.unfocusedContainer}></View>
            <View
              onLayout={(e) =>
                setAnimationLineHeight(e.nativeEvent.layout.height)
              }
              style={styles.focusedContainer}
            >
              {!scanned && (
                <Animated.View
                  style={[
                    styles.animationLineStyle,
                    {
                      transform: [
                        {
                          translateY: focusLineAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, animationLineHeight],
                          }),
                        },
                      ],
                    },
                  ]}
                />
              )}
            </View>
            <View style={styles.unfocusedContainer}></View>
          </View>
          <View style={styles.unfocusedContainer}></View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  unfocusedContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  middleContainer: {
    flexDirection: "row",
    flex: 1.5,
  },
  focusedContainer: {
    flex: 6,
  },
  animationLineStyle: {
    height: 2,
    width: "100%",
    backgroundColor: "red",
  },
  rescanIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TicketScan;
