import { View, Text } from "react-native";
import React, { useState } from "react";
import { useMultistepForm } from "@/hooks/useMultiStepForm";
import Mood1 from "@/components/questionaire/mood1";
import Mood2 from "@/components/questionaire/mood2";
import Mood3 from "@/components/questionaire/mood3";
import Mood4 from "@/components/questionaire/mood4";

const QuestionForm = () => {
  const [formData, setFormData] = useState<string[]>([]);

  const onSubmit = (idx: number, value: string) => {
    console.log(idx, value, formData.length);
    setFormData((prev) => {
      const newData = [...prev];
      if (idx < prev.length) newData[idx] = value;
      else newData.push(value);
      console.log(newData);
      return newData;
    });
    if (!isLastStep) next();
    else () => {};
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Mood1 onSubmit={onSubmit} />,
      <Mood2 onSubmit={onSubmit} />,
      <Mood3 onSubmit={onSubmit} />,
      <Mood4 onSubmit={onSubmit} />,
    ]);

  return <View>{step}</View>;
};

export default QuestionForm;
