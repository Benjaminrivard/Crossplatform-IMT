import React from "react";

import MenuPrincipal from "./src/MenuPrincipal";

export default class App extends React.Component {
  state = {
    voyages: []
  };

  render() {
    let { voyages } = this.state;
    return <MenuPrincipal screenProps={{ voyages }} />;
  }
}
