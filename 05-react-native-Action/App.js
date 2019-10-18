import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Entete from "./src/Entete";
import Saisie from "./src/Saisie";
import BoutonCreer from "./src/BoutonCreer";
import ListeActions from "./src/action/ListeActions";
import Menu from "./src/menu/Menu";

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {
  // état global de l'application
  // il y aura probalement d'autres informations à stocker
  state = {
    texteSaisie: "",
    actions: [],
    option: "Toutes"
  };

  /**
   * Méthode invoquée lorsque que la saisie change.
   *
   * @param nouvelleSaisie la valeur saisie
   */
  quandLaSaisieChange(nouvelleSaisie) {
    console.log("la saisie à changée", nouvelleSaisie);
    //const input = this.state.texteSaisie.concat(nouvelleSaisie);
    this.setState({ texteSaisie: nouvelleSaisie });
  }

  /**
   * Méthode invoquée lors du clic sur le bouton `Valider`.
   */
  validerNouvelleAction() {
    this.setState({
      actions: this.state.actions.concat({
        nom: this.state.texteSaisie,
        terminer: false
      })
    });
  }

  supprimerAction(action) {
    console.log("Suppression de ", action, "de ", this.state.actions);
    const filtered = this.state.actions.filter(element => element != action);
    this.setState({
      actions: filtered
    });
  }

  terminerAction(action) {
    const updated = this.state.actions.map(element => {
      if (element == action) {
        element.terminer = !element.terminer;
      }
      return element;
    });
    this.setState({
      actions: updated
    });
  }

  /**
   * Setter for the option state
   * @param {*} option the new option
   */
  setOption(option) {
    this.setState(state => ({
      option: option
    }));
  }

  render() {
    let { texteSaisie, actions } = this.state;

    if (this.state.option == "Actives") {
      actions = actions.filter(action => action.terminer == false);
    }
    if (this.state.option == "Terminés") {
      actions = actions.filter(action => action.terminer == true);
    }
    return (
      <View style={styles.conteneur}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Entete />
          <Saisie
            texteSaisie={texteSaisie}
            evtTexteModifie={titre => this.quandLaSaisieChange(titre)}
          />
          <ListeActions
            actions={actions}
            supprimerAction={this.supprimerAction.bind(this)}
            terminerAction={this.terminerAction.bind(this)}
          />
          <BoutonCreer onValider={() => this.validerNouvelleAction()} />
        </ScrollView>
        <Menu setOption={option => this.setOption(option)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteneur: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
});
