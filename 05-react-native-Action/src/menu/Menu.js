import React from "react";
import { View, StyleSheet } from "react-native";
import OptionMenu from "./OptionMenu";

/**
 * Composant Menu.
 */
const Menu = ({ setOption }) => (
  <View style={styles.menu}>
    <OptionMenu titre="Toutes" filter={() => setOption("Toutes")} />
    <OptionMenu titre="Actives" filter={() => setOption("Actives")} />
    <OptionMenu titre="Terminés" filter={() => setOption("Terminés")} />
  </View>
);

const styles = StyleSheet.create({
  menu: {
    height: 70,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#dddddd"
  }
});
export default Menu;
