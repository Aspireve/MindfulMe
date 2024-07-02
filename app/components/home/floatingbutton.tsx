import * as React from "react";
import { FAB, Portal, PaperProvider } from "react-native-paper";

const FloatingButton = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }: { open: boolean }) => setState({ open });

  const { open } = state;

  return (
    <FAB.Group
      style={{ position: "absolute", top: 0, right: 0, borderRadius: 40 }}
      open={open}
      theme={{roundness: 100, colors: { primaryContainer: "#EB8144CC", onPrimaryContainer: "#fff" }}}
      visible
      color="#fff"
      icon={open ? "account" : "chat"}
      actions={[
        {
          icon: "alpha-d-circle-outline",
          label: "Dada",
          color: "#000",
          style: {backgroundColor:"#EB8144AA"},
          onPress: () => console.log("Pressed star"),
        },
        {
          icon: "alpha-m-circle-outline",
          label: "Mumma",
          color: "#000",
          style: {backgroundColor:"#EB8144AA"},
          onPress: () => console.log("Pressed email"),
        },
        {
          icon: "alpha-f-circle-outline",
          label: "Friend",
          color: "#000",
          style: {backgroundColor:"#EB8144AA"},
          onPress: () => console.log("Pressed notifications"),
        },
      ]}
      onStateChange={onStateChange}
      onPress={() => {
        if (open) {
          // do something if the speed dial is open
        }
      }}
    />
  );
};

export default FloatingButton;
