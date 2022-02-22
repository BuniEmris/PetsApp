import { StyleSheet } from "react-native";
import appStyles from "../../../constants/styles";
import { Colors } from "../../../styles";
import { RH, RW } from "../../../utils/helpers/responsive";

export const styles = StyleSheet.create({
  container: {
    width: RW(327),
    height: RH(35),
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: RW(15),
    lineHeight: RH(18),
    fontFamily: appStyles.MONTSERRAT,
    fontWeight: "300",
    color: Colors.GRAY_LIGHT,
  },
  btnText: {
    fontSize: RW(15),
    lineHeight: RH(18),
    fontFamily: appStyles.MONTSERRAT,
    fontWeight: "600",
    color: Colors.MAIN_GREEN,
  },
});
