import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Number from "./Number";
import Info from "./Info";
import PinCode from "./PinCode";
import StartScreen from "./StartScreen";

const AuthScreens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Group>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Number" component={Number} />
      <Stack.Screen name="Code" component={PinCode} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Group>
  );
};

export default AuthScreens;
