import { View, Text, StyleSheet } from "react-native";
import React, { Children } from "react";

const Row = ({ children, style }: any) => {
  return <View style={[styles.container, style ? style : {}]}>{children}</View>;
};

export default Row;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
