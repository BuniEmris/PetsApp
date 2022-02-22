/**
 * @format
 */
import { AppRegistry } from "react-native";
import App from "./App";
import React from "react";
import { name as appName } from "./app.json";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const persistor = persistStore(store);
const myApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
AppRegistry.registerComponent(appName, () => myApp);
