import { StyleSheet } from "react-native";
import appStyles from "../../constants/styles";
import { RH, RW } from "../../utils/helpers/responsive";

const pickersStyles = StyleSheet.create({
  text1: {
    fontSize: RW(35),
    fontWeight: "700",
    color: "rgba(51, 51, 51, 1)",
    fontFamily: appStyles.CormorantGaramond,
    lineHeight: RH(42.39),
    marginTop: RH(50),
  },
  text2: {
    fontSize: RW(30),
    fontWeight: "300",
    color: "rgba(47, 128, 237, 1)",
    fontFamily: appStyles.CormorantGaramond,
    lineHeight: RH(36.33),
    fontStyle: "normal",
  },
  button: {
    marginTop: RH(50),
  },
  acceptButton: {
    backgroundColor: "rgba(0, 220, 146, 1)",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: RW(50),
  },
  acceptButtonText: {
    fontSize: RW(30),
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    lineHeight: RH(36.33),
    fontFamily: appStyles.CormorantGaramond,
    fontStyle: "normal",
  },
});

export default pickersStyles;
