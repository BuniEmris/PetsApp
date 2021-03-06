import { StyleSheet } from "react-native";
import appStyles from "../../constants/styles";
import { RH, RW } from "../../utils/helpers/responsive";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: RW(15),
    paddingVertical: RH(30),
  },
  laterButton: {
    alignSelf: "flex-end",
  },
  laterButtonText: {
    fontFamily: appStyles.GILROY,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: RW(18),
    color: "rgba(235, 87, 87, 1)",
  },
  title: {
    fontFamily: appStyles.CormorantGaramond,
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: RW(30),
    lineHeight: RH(36),
    color: "#828282",
    marginTop: RH(15),
  },
  subTitle: {
    fontFamily: appStyles.CormorantGaramond,
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: RW(40),
    lineHeight: RH(48.44),
    marginTop: RH(15),
    marginBottom: RH(25),
  },
  photoText: {
    fontFamily: appStyles.CormorantGaramond,
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: RW(35),
    lineHeight: RH(42.39),
    marginTop: RH(35),
    marginBottom: RH(40),
    textAlign: "center",
  },
  cameraWrapper: {
    width: RW(150),
    height: RW(150),
    borderRadius: RW(75),
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "rgba(130, 130, 130, 1)",
    alignSelf: "center",
  },
  camera: {
    width: RW(150),
    height: RW(150),
    borderRadius: RW(75),
    alignSelf: "center",
  },
  input: {
    width: RW(290),
    height: RH(50),
    fontFamily: appStyles.CormorantGaramond,
    fontWeight: "300",
    fontStyle: "normal",
    fontSize: RW(36),
    lineHeight: RH(43.6),
    borderBottomWidth: RW(1),
    borderBottomColor: "rgba(130, 130, 130, 1)",
  },
  text1: {
    fontSize: RW(35),
    fontWeight: "700",
    fontFamily: appStyles.CormorantGaramond,
    lineHeight: RH(42.39),
    marginTop: RH(25),
    marginRight: RW(25),
  },
  text2: {
    fontSize: RW(30),
    fontWeight: "300",
    fontFamily: appStyles.CormorantGaramond,
    lineHeight: RH(36.33),
    fontStyle: "normal",
    marginTop: RH(25),
  },
  switchButtonActive: {
    borderBottomColor: "rgba(0, 220, 146, 1)",
    borderBottomWidth: RW(1),
    marginRight: RW(25),
  },
  switchButton: {
    borderBottomColor: "rgba(0, 220, 146, 1)",
    marginRight: RW(25),
  },
  removeButton: {
    marginVertical: RH(50),
    alignSelf: "center",
  },
  removeButtonText: {
    fontWeight: "700",
    fontFamily: appStyles.CormorantGaramond,
    fontSize: RW(24),
    lineHeight: RH(29.06),
    color: "rgba(235, 87, 87, 1)",
  },
});
