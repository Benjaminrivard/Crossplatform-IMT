import React from "react";
import { View, Text } from "react-native";
import ListerVoyages from "./ListerVoyages";
import AjouterVoyage from "./AjouterVoyage";
import { createBottomTabNavigator } from "react-navigation";

const MenuPrincipal = createBottomTabNavigator({
  ListerVoyages: { screen: ListerVoyages },
  AjouterVoyage: { screen: AjouterVoyage }
});

export default MenuPrincipal;
