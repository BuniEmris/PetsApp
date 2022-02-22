import { StyleSheet } from "react-native";
import appStyles from "../../../constants/styles";
import { RH, RW } from "../../../utils/helpers/responsive";

export const styles = StyleSheet.create({
  container: {
    padding: RW(16),
    width: "100%",
    height: "100%",

    backgroundColor: "#fff",
  },
  header: {
    fontFamily: appStyles.CormorantGaramond,
    fontWeight: "700",
    fontSize: RW(40),
    lineHeight: RH(48.44),
    textAlign: "center",
    marginTop: RH(22),
    marginBottom: RH(10),
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: RW(11),
    backgroundColor: "rgba(247, 247, 247, 1)",
    borderRadius: RW(5),
  },
  input: {
    width: "80%",
    fontFamily: appStyles.MONTSERRAT,
    fontWeight: "300",
    fontSize: RW(18),
    lineHeight: RH(22),
  },
});
