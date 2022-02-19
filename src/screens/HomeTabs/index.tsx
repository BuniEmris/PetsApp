import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Map from "./Map";
import Walks from "./Walks";
import Pets from "./Pets";
import Settings from "./Settings";
import appStyles from "../../constants/styles";
import MapIcon from "../../assets/icons/MapIcon";
import WalkIcon from "../../assets/icons/WalkIcon";
import PetIcon from "../../assets/icons/PetIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import { RH } from "../../utils/helpers/responsive";
const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: "rgba(0, 220, 146, 1)",
  tabBarShowLabel: false,
  tabBarInactiveTintColor: "#C1C1CC",
  tabBarItemStyle: {
    height: "90%",
  },

  tabBarStyle: {
    paddingTop: RH(15),
    height: RH(62),
    backgroundColor: appStyles.BACKGROUND_DEFAULT,
    shadowColor: "rgba(30, 27, 38, 0.05)",
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    elevation: 1,
    shadowOpacity: 1.0,
  },
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: appStyles.BACKGROUND_DEFAULT }}
      screenOptions={screenOptions}
    >
      <Tab.Screen
        name="Map"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MapIcon width={size} height={size} stroke={color} />
          ),
        }}
        component={Map}
      />
      <Tab.Screen
        name="Walks"
        options={{
          tabBarIcon: ({ color, size }) => (
            <WalkIcon width={size} height={size} stroke={color} />
          ),
        }}
        component={Walks}
      />
      <Tab.Screen
        name="Pets"
        options={{
          tabBarIcon: ({ color, size }) => (
            <PetIcon width={size} height={size} fill={color} />
          ),
        }}
        component={Pets}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ color, size }) => (
            <SettingsIcon width={size} height={size} stroke={color} />
          ),
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
