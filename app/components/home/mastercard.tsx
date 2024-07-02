import { View, Text } from "react-native";
import React from "react";
import Chipmenu from "./chipmenu";
import { Image } from "expo-image";

const MasterCard = () => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        marginVertical: 20,
        padding: 15,
        backgroundColor: "#FFE3D3",
        borderRadius: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: 600, fontSize: 17 }}>Flute Meditation</Text>
        <Chipmenu
          title="Continue Playing"
          handleClick={() => console.log("Continue Flute")}
        />
      </View>
      <Image
        source={require("@/assets/images/flute.png")}
        style={{
          width: "100%",
          aspectRatio: 16 / 9,
          maxHeight: 150,
          margin: "auto",
        }}
      />
    </View>
  );
};

export default MasterCard;
