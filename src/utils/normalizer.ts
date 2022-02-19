/*
 * @author BuniEmris
 * @created at 2022
 **/

import { hasNotch as hasNotchDevice } from "react-native-device-info";
import { Dimensions } from "react-native";
const hasNotch = hasNotchDevice();

const { width, height } = Dimensions.get("screen");

const RW = (val: number) => {
  const scale = width / 390;
  return val * scale;
};

const RH = (val: number) => {
  const scale = height / 844;
  return val * scale;
};

export { hasNotch, RW, RH };
