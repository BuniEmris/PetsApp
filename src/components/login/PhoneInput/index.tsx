import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { TextInputMask } from "react-native-masked-text";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type IProps = {
  phoneInput: string;
};
export default function PhoneInput({ phoneInput }: IProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

  return (
    <View style={styles.container}>
      <View style={styles.inputTextContainer}>
        <Text style={styles.inputText}>+7</Text>
      </View>
      <View style={styles.inputMaskContainer}>
        <TextInputMask
          type={"custom"}
          options={{ mask: "(999) 999-99-99" }}
          value={phoneInput}
          editable={false}
          placeholder={"(978) 048-65-75"}
          style={
            phoneInput.length === 10
              ? styles.inputMaskActive
              : styles.inputMaskInActive
          }
        />
      </View>
    </View>
  );
}
