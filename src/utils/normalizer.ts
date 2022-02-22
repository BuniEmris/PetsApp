/*
 * @author BuniEmris
 * @created at 2022
 **/

import { hasNotch as hasNotchDevice } from "react-native-device-info";
import { Dimensions } from "react-native";
const hasNotch = hasNotchDevice();

export { hasNotch };
