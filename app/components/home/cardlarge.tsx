import { View, Text } from "react-native";
import React from "react";
import Chipmenu from "./chipmenu";
import { Image } from "expo-image";

type CardLargeProps = {
    name: string,
    source: string,
    color: string
}

const CardLarge = ({name, source, color}: CardLargeProps) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        padding: 15,
        backgroundColor: color,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <Text style={{ fontWeight: 600, fontSize: 17 }}>{name}</Text>
        <Chipmenu
          title="Play Now"
          handleClick={() => console.log("Continue Flute")}
        />
      </View>
      <Image
        source={source}
        style={{
          marginTop: 10,
          width: "100%",
          aspectRatio: 1 / 1,
          margin: "auto",
        }}
      />
    </View>
  );
};

export default CardLarge;
