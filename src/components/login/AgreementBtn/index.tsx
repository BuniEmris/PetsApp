import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function AgreementBtn() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        By continuing to log in, you agree to the
      </Text>
      <TouchableOpacity>
        <Text style={styles.btnText}>user agreement</Text>
      </TouchableOpacity>
    </View>
  );
}
