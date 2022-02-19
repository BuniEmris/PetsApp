import { View, Text, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import pickersStyles from "./styles";

type Props = {
  label: string;
  disabled: boolean;
  style?: ViewStyle;
  onPress: () => void;
};

const AcceptButton = ({ label, disabled, style, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[
        pickersStyles.acceptButton,
        style ? style : {},
        disabled && { backgroundColor: "rgba(0, 220, 146, 0.5)" },
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={pickersStyles.acceptButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default AcceptButton;
