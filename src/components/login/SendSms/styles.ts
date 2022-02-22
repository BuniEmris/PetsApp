import { StyleSheet } from "react-native";
import appStyles from "../../../constants/styles";
import { Colors } from "../../../styles";
import { RH, RW } from "../../../utils/helpers/responsive";

export const styles = StyleSheet.create({
  SmsContainer: {
    width: RW(200),
    height: RH(20),
    alignItems: "center",
  },
  smsText: {
    fontFamily: appStyles.MONTSERRAT,

    color: Colors.GRAY,
    fontSize: 16,
    fontWeight: "300",
    lineHeight: RH(20),
  },
  timer: {
    color: Colors.MAIN_GREEN,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: RH(20),
    fontFamily: appStyles.MONTSERRAT,
  },
});
