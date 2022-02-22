import { StyleSheet } from "react-native";
import appStyles from "../../../constants/styles";
import { Colors } from "../../../styles";
import { RH, RW } from "../../../utils/helpers/responsive";

export const styles = StyleSheet.create({
  container: {
    marginTop: RH(82),
    alignItems: "center",
    flexDirection: "row",
    height: RH(49),
  },
  inputTextContainer: {
    marginLeft: RW(30),
    width: RW(51.1),
  },
  inputText: {
    fontSize: RW(30),
    fontFamily: appStyles.MONTSERRAT,
    fontWeight: "600",
    color: Colors.BLACK,
    lineHeight: RH(37),
  },
  inputMaskContainer: {
    width: RW(274.9),
  },
  inputMaskActive: {
    fontSize: RW(30),
    lineHeight: RH(37),
    fontFamily: appStyles.MONTSERRAT,
    fontWeight: "normal",
    color: Colors.MAIN_GREEN,
  },
  inputMaskInActive: {
    fontSize: RW(30),
    lineHeight: RH(37),
    fontFamily: appStyles.MONTSERRAT,
    fontWeight: "normal",
    color: Colors.RED,
  },
});
