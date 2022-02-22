/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabs from "./src/screens/HomeTabs";
import Number from "./src/screens/Auth/Number";
import Info from "./src/screens/Auth/Info";
import { Colors } from "./src/styles";
import StartScreen from "./src/screens/Auth/StartScreen";
import PinCode from "./src/screens/Auth/PinCode";
import PetBreed from "./src/screens/Auth/breed";
const App = () => {
  const Stack = createNativeStackNavigator();
  const isLoggedIn = false;
  return (
    // <SafeAreaView style={styles.sectionContainer}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? "HomeTabs" : "Start"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="PetBreed" component={PetBreed} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Number" component={Number} />
        <Stack.Screen name="Code" component={PinCode} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    // backgroundColor: "red",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
