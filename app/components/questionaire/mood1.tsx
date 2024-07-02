import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Image } from "expo-image";
import ChoiceButton from "@/components/questionaire/choicebutton";

const { height } = Dimensions.get("window");

const Mood1 = ({onSubmit}: {onSubmit: (idx: number, value: string) => void}) => {
  const [selectedChoice, setSelectedChoice] = React.useState("first");

  const choices = [
    { label: 'Choice 1', value: 'choice1' },
    { label: 'Choice 2', value: 'choice2' },
    { label: 'Choice 3', value: 'choice3' },
    { label: 'Choice 4', value: 'choice4' },
  ];

  const handleSubmit = (value: string) => {
    setSelectedChoice(value)
    onSubmit(0, value)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageNumber}>1/4</Text>
        <Image
          source={require("@/assets/images/mood1.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={{color: "#545454", fontSize: 16, marginBottom: 10}}>Questions to know more about the users</Text>
        {choices.map((choice) => (
        <ChoiceButton
          key={choice.value}
          label={choice.label}
          isSelected={selectedChoice === choice.value}
          onPress={() => handleSubmit(choice.value)}
        />
      ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    minHeight: height,
  },
  image: {
    width: "100%",
    aspectRatio: 1 / 1,
  },
  header: {
    textAlign: "center",
    marginHorizontal: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 4
  },
  pageNumber: {
    textAlign: "center",
    fontSize: 18
  }
});

export default Mood1;
