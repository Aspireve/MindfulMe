import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Controller, useForm } from "react-hook-form";
import { Button, TextInput } from "react-native-paper";
import { Image } from "expo-image";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("window");

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [displayPassword, setDisplayPassword] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    // Simulate form submission
    console.log("Submitted Data:", data);
    setSubmittedData(data);
  };

  // const auth = getAuth()

  return (
    <View style={styles.container}>
      {/* Form Girdileri */}
      <Image
        source={require("@/assets/images/authlogo.png")}
        contentFit="contain"
        style={styles.image}
      />
      <View style={{ display: "flex", flexDirection: "column", gap: 25 }}>
        <View style={{ display: "flex", gap: 6 }}>
          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                style={styles.input}
                placeholder="Email or Phone Number"
              />
            )}
            name="email"
            rules={{
              required: "Enter a valid address",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            }}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}

          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                style={styles.input}
                placeholder="Password"
                secureTextEntry={!displayPassword}
                />
            )}
            name="password"
            rules={{ required: "Enter your password" }}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                alignItems: "center",
              }}
            >
              <Checkbox
                style={styles.checkbox}
                value={displayPassword}
                onValueChange={() => setDisplayPassword((prev) => !prev)}
              />
              <Text style={styles.paragraph}>Show Password</Text>
            </View>
            <Pressable>
              <Text style={{ fontSize: 12, color: "#545454" }}>
                Forgot Password
              </Text>
            </Pressable>
          </View>
        </View>
        {/* Submit Butonu */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <LinearGradient
              colors={["#FFB387", "#F79F6D"]}
              style={styles.gradient}
              start={{ x: 0, y: 0 }} // Top-left corner
              end={{ x: 0.7, y: 0.6 }}   // Bottom-right corner
            >
              <Text style={{ color: "#2B2B2B", fontSize: 16, fontWeight: 500 }}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={{ fontSize: 14, color: "#545454" }}>
            Dont have an account? Sign up
          </Text>
        </View>
      </View>
      {/* Gönderilen Veriler */}
      {submittedData && (
        <View style={styles.submittedContainer}>
          <Text style={styles.submittedTitle}>Submitted Data:</Text>
          <Text>Name: {submittedData.name}</Text>
          <Text>Email: {submittedData.email}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: "#fff",
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    minHeight: height,
  },
  input: {
    height: 35,
    fontSize: 14,
    backgroundColor: "#F7F7F7",
    borderColor: "#AFAFAF99",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  submittedContainer: {},
  submittedTitle: {},
  checkbox: {
    backgroundColor: "#EFEFEF",
    borderColor: "#D1D4D6",
  },
  paragraph: {
    fontSize: 12,
    color: "#545454",
  },
  gradient: {
    width: "100%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    padding: 7,
  },
  image: {
    width: "75%",
    maxHeight: 250,
    aspectRatio: 16 / 9,
    marginHorizontal: "auto",
  },
  button: {
    // backgroundColor: "#FFB387",
    width: "100%",
    color: "#2B2B2B",
    padding: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
