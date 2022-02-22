import { View, Text } from "react-native";
import React, { useState } from "react";
import SafeAreaWrapper from "../../../components/SafeAreaWrapper";
import BackBtnStyled from "../../../components/login/BackBtnStyled";
import { styles } from "./styles";
import PhoneInput from "../../../components/login/PhoneInput";
import VirtualKeyboard from "../../../components/login/VirtualKeyboard";
import Devider from "../../../components/shared/Devider";
import AgreementBtn from "../../../components/login/AgreementBtn";

export default function Number() {
  const [phoneInput, setPhoneInput] = useState("");

  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <BackBtnStyled text="Welcome" />
        <Text style={styles.headerText}>
          Fill out the form to enter the application
        </Text>
        <PhoneInput phoneInput={phoneInput} />
        <VirtualKeyboard
          phoneInput={phoneInput}
          setPhoneInput={setPhoneInput}
          phone={true}
        />
        <View style={styles.devider}>
          <Devider />
        </View>
        <AgreementBtn />
      </View>
    </SafeAreaWrapper>
  );
}
