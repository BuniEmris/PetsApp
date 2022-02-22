import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import btnImage from "../../../assets/images/backbtn.png";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./styles";
type IProps = {
  text: string;
};
export default function BackBtnStyled({ text }: IProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.container}
      >
        <Image source={btnImage} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
}
