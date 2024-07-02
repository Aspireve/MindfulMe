import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { Appbar, Button } from "react-native-paper";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const MeditationPage = () => {
  const _handleMore = () => console.log("clicked");
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#fff", height: "100%" }}>
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
        style={{
          width: "100%",
          height: 500,
          marginVertical: 20,
          marginHorizontal: "auto",
        }}
        contentFit="contain"
      />
      <Pressable
        style={{
          width: "auto",
          marginHorizontal: 20,
          //   color: "#2B2B2B",
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
            borderRadius: 10,
            padding: 7,
            paddingVertical: 10
          }}
          start={{ x: 0, y: 0 }} // Top-left corner
          end={{ x: 0.7, y: 0.6 }} // Bottom-right corner
        >
          <Text style={{ color: "#2B2B2B", fontSize: 16, fontWeight: 500 }}>
            START
          </Text>
        </LinearGradient>
      </Pressable>
    </ScrollView>
  );
};

export default MeditationPage;
