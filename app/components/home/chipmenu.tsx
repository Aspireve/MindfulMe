import { View, Text } from "react-native";
import React from "react";
import { Chip } from "react-native-paper";

type ChipmenuProps = {
  idx?: number,
  title: string,
  isSelected?: boolean,
  handleClick: () => void
}

const Chipmenu = ({idx, title, isSelected, handleClick}: ChipmenuProps) => {
  return (
    <Chip
      textStyle={{ color: isSelected ? "#fff" : "#393939" }}
      style={{ backgroundColor: isSelected ? "#393939" : "#fff", flexGrow: 0 }}
      onPress={() => handleClick()}
    >
      {title}
    </Chip>
  );
};

export default Chipmenu;
