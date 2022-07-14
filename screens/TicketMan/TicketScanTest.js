import { View, Text } from "react-native";
import React from "react";
import { Camera } from "expo";
import BarcodeMask from "@nartc/react-native-barcode-mask";

const TicketScanTest = () => {
  return (
    <View>
      <Camera>
        <BarcodeMask width={300} height={300} showAnimatedLine={true} />
      </Camera>
    </View>
  );
};

export default TicketScanTest;
