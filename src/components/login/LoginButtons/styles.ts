import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";
import { RH, RW } from "../../../utils/helpers/responsive";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: RH(125),
  },
  btn: {
    backgroundColor: Colors.MAIN_GREEN,
    width: RW(300),
    height: RH(50),
    borderRadius: RH(50),
    alignItems: "center",
    justifyContent: "center",
  },
  txtStyle: {
    fontFamily: "CormorantGaramond-Bold",
    fontSize: RW(24),
    lineHeight: RH(29),
    color: Colors.WHITE,
  },
});
