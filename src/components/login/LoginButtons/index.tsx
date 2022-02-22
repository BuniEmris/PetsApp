import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigatorProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export default function LoginButtons({}) {
  const navigation = useNavigation<NativeStackNavigatorProps>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Number");
        }}
        style={styles.btn}
      >
        <Text style={styles.txtStyle}>Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Number");
        }}
        style={styles.btn}
      >
        <Text style={styles.txtStyle}>Continue with login</Text>
      </TouchableOpacity>
    </View>
  );
}
