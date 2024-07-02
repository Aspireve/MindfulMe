import { View, Text, Pressable } from "react-native";
import React from "react";
import { Appbar, Button } from "react-native-paper";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const MeditationPage = () => {
  const _handleMore = () => console.log("clicked");
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Appbar.Header elevated={true} style={{ backgroundColor: "#fff" }}>
        <Image
          source={require("@/assets/images/defaultavatar.png")}
          style={{ height: 30, width: 30, marginLeft: 20, marginRight: 10 }}
        />
        <Appbar.Content title="Let's Meditate" titleStyle={{ fontSize: 20 }} />
        <Appbar.Action icon="menu" onPress={_handleMore} />
      </Appbar.Header>
      <Image
        source={require("@/assets/images/meditation.png")}
        style={{ aspectRatio: 9 / 16, marginHorizontal: 20 }}
        contentFit="contain"
      />
      <Pressable
        style={{
          width: "auto",
          marginHorizontal: 20,
        //   color: "#2B2B2B",
          padding: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => console.log("started")}
      >
        <LinearGradient
          colors={["#FFB387", "#F79F6D"]}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            padding: 7,
          }}
          start={{ x: 0, y: 0 }} // Top-left corner
          end={{ x: 0.7, y: 0.6 }} // Bottom-right corner
        >
          <Text style={{ color: "#2B2B2B", fontSize: 16, fontWeight: 500 }}>
            START
          </Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

export default MeditationPage;
