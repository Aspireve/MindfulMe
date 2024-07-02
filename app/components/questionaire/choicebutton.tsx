import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ChoiceButtonProps = {
    label: string,
    onPress: () => void
    isSelected: boolean
}

const ChoiceButton = ({ label, onPress, isSelected }: ChoiceButtonProps) => {
  return (
    <TouchableOpacity 
      style={[styles.button, isSelected && styles.selectedButton]} 
      onPress={onPress}
    >
      <Text style={[styles.buttonText, isSelected && styles.selectedText]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#AFAFAF66',
    borderRadius: 8,
    backgroundColor: '#FFB38733',
  },
  selectedButton: {
    backgroundColor: '#FFB387',
  },
  buttonText: {
    color: '#424242cc',
  },
  selectedText: {
    color: '#424242',
  }
});

export default ChoiceButton;
