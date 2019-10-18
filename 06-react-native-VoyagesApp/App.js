import React from "react";

import MenuPrincipal from "./src/MenuPrincipal";

export default class App extends React.Component {
  state = {
    voyages: []
  };

  ajouterNouveauVoyage(voyage) {
    this.setState({
      voyages: this.state.voyages.concat(voyage)
    });
  }

  ajouterLieuVoyage(voyage, lieu) {
    const updated = this.state.voyages.map(element => {
      if (element == voyage) {
        element.lieux = element.lieux.concat(lieu);
      }
      return element;
    });
    this.setState({
      voyages: updated
    });
  }

  render() {
    let { voyages } = this.state;
    return (
      <MenuPrincipal
        screenProps={{
          voyages: voyages,
          ajout: this.ajouterNouveauVoyage.bind(this),
          ajoutLieu: this.ajouterLieuVoyage.bind(this)
        }}
      />
    );
  }
}
