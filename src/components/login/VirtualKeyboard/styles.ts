import { StyleSheet } from "react-native";
import appStyles from "../../../constants/styles";
import { Colors } from "../../../styles";
import { RH, RW } from "../../../utils/helpers/responsive";

export const styles = StyleSheet.create({
  container: {
    marginTop: RH(82),
    height: RH(240),
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: RH(60),
  },
  rowBottomContainer: {
    flexDirection: "row",
  },
  numberContainer: {
    width: RW(120),
    height: RH(55),
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  numbers: {
    fontFamily: appStyles.MONTSERRAT,
    fontSize: 24,
    lineHeight: RH(29),
    letterSpacing: 4,
    color: Colors.BLACK,
  },
  btn: {
    fontFamily: appStyles.CormorantGaramond,
    fontSize: 24,
    lineHeight: RH(29),
    color: Colors.MAIN_GREEN,
    fontWeight: "bold",
  },
});
