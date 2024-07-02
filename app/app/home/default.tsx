import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import FloatingButton from "@/components/home/floatingbutton";
import Chipmenu from "@/components/home/chipmenu";
import { Appbar } from "react-native-paper";
import { Image } from "expo-image";
import MasterCard from "@/components/home/mastercard";
import CardSmall from "@/components/home/cardsmall";
import CardLarge from "@/components/home/cardlarge";
import CardColumn from "@/components/home/cardcolumn";
import { registerRootComponent } from "expo";

const Home = () => {
  const [selectedChip, setSelectedChip] = useState<number>(0);
  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  const chipmenu = [
    { key: 0, title: "Soulful Instrumental" },
    {
      key: 1,
      title: "Healing Frequency",
    },
    {
      key: 2,
      title: "Tibetan Bowl",
    },
  ];

  return (
    <View
      style={{ position: "relative", height: "100%", backgroundColor: "#fff" }}
    >
      <Appbar.Header elevated={false} style={{ backgroundColor: "#fff" }}>
        <Image
          source={require("@/assets/images/defaultavatar.png")}
          style={{ height: 30, width: 30, marginLeft: 20, marginRight: 10 }}
        />
        <Appbar.Content title="Hi, Steve" titleStyle={{ fontWeight: 600 }} />
        <Appbar.Action icon="menu" onPress={_handleMore} />
      </Appbar.Header>
      <ScrollView
        style={{ flexGrow: 0, paddingHorizontal: 10, overflow: "scroll" }}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView
          style={{ flexGrow: 0, paddingHorizontal: 10, overflow: "scroll" }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {chipmenu.map((chip, idx) => (
            <Chipmenu
              key={`Menu ${idx}`}
              idx={idx}
              title={chip.title}
              isSelected={idx === selectedChip}
              handleClick={() => setSelectedChip(idx)}
            />
          ))}
        </ScrollView>
        <MasterCard />
        <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <CardColumn>
            <CardSmall
              source={require("@/assets/images/piano.png")}
              name="Piano"
              color="#E7F6FF"
            />
            <CardLarge
              source={require("@/assets/images/tabla.png")}
              name="Tabla"
              color="#FFFACA"
            />
          </CardColumn>
          <CardColumn>
            <CardLarge
              name="Saxophone"
              source={require("@/assets/images/saxophone.png")}
              color="#FFE8EC"
            />
            <CardSmall
              name="Guitar"
              source={require("@/assets/images/guitar.png")}
              color="#EEE5FF"
            />
          </CardColumn>
        </View>
      </ScrollView>
      <FloatingButton />
    </View>
  );
};

export default Home;
