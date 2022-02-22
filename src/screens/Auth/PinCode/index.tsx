import { View, Text, TextInput } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import SafeAreaWrapper from "../../../components/SafeAreaWrapper";
import BackBtnStyled from "../../../components/login/BackBtnStyled";
import { styles } from "./styles";
import VirtualKeyboard from "../../../components/login/VirtualKeyboard";
import Devider from "../../../components/shared/Devider";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import PincodeLiner from "../../../assets/icons/PincodeLiner";
import InvalidLiner from "../../../assets/icons/PincodeRedValid";
import SendSms from "../../../components/login/SendSms";
export default function PinCode({ route }: any) {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();
  const [pincode, setPincode] = useState("");
  const [invalid, setInvalid] = useState(false);
  const pinRef = useRef(null);

  const handleNextStep = () => navigation.navigate("Info");
  const handlingCode = (val: string) => {
    setPincode(val);
    if (val === "1111") {
      handleNextStep();
    } else {
      setInvalid(true);
    }
  };
  useEffect(() => {
    if (pincode === "1111") {
      handleNextStep();
    } else if (pincode.length === 4 && pincode !== "1111") {
      setInvalid(true);
    }
  }, [pincode]);

  function formatPhoneNumber(phoneNumberString: string) {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  }
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <BackBtnStyled text="Verification" />
        <Text style={styles.headerText}>Sent SMS code</Text>
        <View style={styles.details}>
          <Text style={styles.detailsText}>To the number:</Text>
          <Text style={styles.phoneText}>
            {" "}
            + 7 {formatPhoneNumber(route?.params.phoneInput)}
          </Text>
        </View>
        <View style={styles.pinContainer}>
          {/* <TextInput
            value={pincode}
            maxLength={4}
            keyboardType="numeric"
            style={styles.inputContainer}
            textContentType="oneTimeCode"
          /> */}
          <SmoothPinCodeInput
            codeLength={4}
            ref={pinRef}
            placeholder="0"
            placeholderStyle={styles.placeholder}
            cellStyle={styles.inputContainer}
            textStyle={styles.inputText}
            textStyleFocused={styles.inputFocus}
            value={pincode}
            // onTextChange={(val: any) => setPincode(val)}
            onFulfill={handlingCode}
            autoFocus
            cellStyleFocused={null}
          />
        </View>
        <View style={styles.pincodeIcon}>
          {invalid ? <InvalidLiner /> : <PincodeLiner />}
          {invalid ? <InvalidLiner /> : <PincodeLiner />}
          {invalid ? <InvalidLiner /> : <PincodeLiner />}
          {invalid ? <InvalidLiner /> : <PincodeLiner />}
        </View>
        <VirtualKeyboard
          phoneInput={pincode}
          setPhoneInput={setPincode}
          phone={false}
        />
        <View style={styles.devider}>
          <Devider />
        </View>
        <View style={styles.smsTimer}>
          <SendSms showErrorPin={invalid} setShowErrorPin={setInvalid} />
        </View>
      </View>
    </SafeAreaWrapper>
  );
}
