import { StyleSheet } from "react-native";
import appStyles from "../../../constants/styles";
import { Colors } from "../../../styles";
import { RH, RW } from "../../../utils/helpers/responsive";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginHorizontal: RW(15),
  },
  headerText: {
    fontFamily: appStyles.CormorantGaramond,
    fontWeight: "bold",
    fontSize: RW(40),
    lineHeight: RH(48),
    color: Colors.BLACK,
    width: RW(358),
    marginTop: RH(10),
  },
  details: {
    flexDirection: "row",
  },
  detailsText: {
    fontFamily: appStyles.MONTSERRAT,
    fontSize: 18,
    fontWeight: "300",
    lineHeight: RH(22),
    color: Colors.GRAY,
  },
  phoneText: {
    fontFamily: appStyles.MONTSERRAT,
    fontSize: 18,
    fontWeight: "300",
    lineHeight: RH(22),
    color: Colors.MAIN_GREEN,
  },
  pinContainer: {
    marginLeft: RW(20),
    marginTop: RH(86),
    alignItems: "center",
  },
  inputContainer: {
    width: RW(50),
    height: RH(55),
    marginRight: RW(30),
    alignItems: "center",
  },
  inputText: {
    fontFamily: appStyles.MONTSERRAT,
    textAlign: "center",
    fontSize: RW(48),
    letterSpacing: 4,
    fontWeight: "400",
    lineHeight: RH(59),
    color: Colors.GRAY_LIGHT,
  },
  inputFocus: {
    fontFamily: appStyles.MONTSERRAT,
    textAlign: "center",
    fontSize: RW(48),
    letterSpacing: 4,
    fontWeight: "400",
    lineHeight: RH(59),
    color: Colors.BLACK,
  },
  pincodeIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: RW(300),
    marginLeft: RW(25),
  },
  placeholder: {
    color: Colors.GRAY_LIGHT,
  },
  devider: {
    marginTop: RH(32),
    marginBottom: RH(12),
  },
  smsTimer: {
    alignItems: "center",
  },
});
