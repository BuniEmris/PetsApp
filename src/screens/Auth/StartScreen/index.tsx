import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import LoginButtons from "../../../components/login/LoginButtons";

export default function StartScreen() {
  return (
    <ImageBackground
      source={require("../../../assets/images/bg1.png")}
      resizeMode="cover"
      style={styles.imageBg}
    >
      <View>
        <Text style={styles.text}>Petbook</Text>
      </View>
      <View>
        <LoginButtons />
      </View>
    </ImageBackground>
  );
}
