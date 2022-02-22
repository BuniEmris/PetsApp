import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";
import { RH, RW } from "../../../utils/helpers/responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  imageBg: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    fontFamily: "CormorantGaramond-Bold",
    fontSize: RW(96),
    color: Colors.WHITE,
    paddingBottom: RH(175),
    paddingTop: RH(365),
  },
});
