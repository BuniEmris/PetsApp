/**
 * @format
 */

import { AppRegistry } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { name as appName } from "./app.json";
import { store } from "./src/redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Colors } from "./src/styles";

const myApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => myApp);
