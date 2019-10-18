import React from "react";
import { View, Text } from "react-native";
import ListerVoyages from "./ListerVoyages";
import AjouterVoyage from "./AjouterVoyage";
import UnVoyage from "./UnVoyage";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import { couleurs } from "./Theme";

const options = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: couleurs.primaire
    },
    headerTintColor: "#fff"
  }
};

const VoyagesNav = createStackNavigator(
  {
    ListerVoyages: { screen: ListerVoyages },
    UnVoyage: { screen: UnVoyage }
  },
  options
);

const MenuPrincipal = createBottomTabNavigator({
  ListerVoyages: { screen: VoyagesNav },
  AjouterVoyage: { screen: AjouterVoyage }
});
export default MenuPrincipal;
