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
    height: RH(100),
    width: RW(358),
    marginTop: RH(10),
  },
  devider: {
    marginTop: RH(32),
    marginBottom: RH(12),
  },
});
