import * as React from "react";
import { View } from "react-native";
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  useTheme,
} from "react-native-paper";

const Payment = () => {
  const theme = useTheme();

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  return (
    <View>
      <Button onPress={showDialog}>Pay</Button>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{
            backgroundColor: theme.colors.White,
            zIndex: 50,
          }}
        >
          <Dialog.Title>Price : 25 BDT</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Thanks for purchasing</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default Payment;
