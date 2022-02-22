import { StyleSheet } from "react-native";
import appStyles from "../../../constants/styles";
import { Colors } from "../../../styles";
import { RH, RW } from "../../../utils/helpers/responsive";
import { hasNotch } from "../../../utils/normalizer";

export const styles = StyleSheet.create({
  container: {
    marginTop: hasNotch ? 20 : 10,
  },
  textStyle: {
    color: Colors.GRAY,
    marginTop: RH(16),
    fontSize: 30,
    lineHeight: RH(36),
    fontWeight: "300",
    fontFamily: appStyles.CormorantGaramond,
  },
});
