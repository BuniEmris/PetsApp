import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import bg from "../../../assets/images/bg1.png";

export default function StartScreen() {
  return (
    <ImageBackground
      source={require("../../../assets/images/bg1.png")}
      resizeMode="cover"
      style={styles.imageBg}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Petbook</Text>
      </View>
    </ImageBackground>
  );
}
