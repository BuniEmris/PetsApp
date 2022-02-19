import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Row from "../shared/Row";
import pickersStyles from "./styles";

const Pickers = ({ text1, text2, onPress }: any) => {
  return (
    <Row>
      <Text style={pickersStyles.text1}>{text1}</Text>
      <TouchableOpacity onPress={onPress} style={pickersStyles.button}>
        <Text style={pickersStyles.text2}>{text2}</Text>
      </TouchableOpacity>
    </Row>
  );
};

export default Pickers;
