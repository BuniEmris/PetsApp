import { SafeAreaView } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function SafeAreaWrapper(props: any) {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
}
