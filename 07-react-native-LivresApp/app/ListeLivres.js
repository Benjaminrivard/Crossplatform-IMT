import React from "react";
import {
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import {ajouterLivre, supprimerLivre} from "./actions";

const etatInitialForm = {
  nom: "",
  auteur: ""
};

class ListeLivres extends React.Component {
  state = etatInitialForm;

  miseAJourSaisie = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value
    });
  };

  ajouterLivre = () => {
    // TODO décommenter
    this.props.dispatchAjouterLivre(this.state);
    this.setState(etatInitialForm);
  };

  supprimerLivre = (id) => {
    this.props.dispatchSupprimerLivre(id);
  }

  render() {
    // TODO décommenter
    const { livres } = this.props;

    // TODO supprimer
    return (
      <View style={styles.conteneur}>
        <Text style={styles.titre}>Livres</Text>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={styles.conteneurLivres}
        >
          {livres.map((livre, index) => (
            <View style={styles.livre} key={index}>
              <Text style={styles.nom}>{livre.nom}</Text>
              <Text style={styles.auteur}>{livre.auteur}</Text>
              <TouchableHighlight onPress={() => this.supprimerLivre(livre.id)} >
                <View>
                  <Ionicons name="ios-close-circle" size={32} color="red" />
                </View>
              </TouchableHighlight>
            </View>
          ))}
        </ScrollView>
        <View style={styles.conteneurSaisie}>
          <View style={styles.wrapper}>
            <TextInput
              value={this.state.nom}
              onChangeText={value => this.miseAJourSaisie("nom", value)}
              style={styles.saisie}
              placeholder="Titre"
            />
            <TextInput
              value={this.state.auteur}
              onChangeText={value => this.miseAJourSaisie("auteur", value)}
              style={styles.saisie}
              placeholder="Auteur"
            />
          </View>
          <TouchableOpacity onPress={this.ajouterLivre}>
            <View style={styles.conteneurBoutonAjouter}>
              <Text style={styles.boutonAjouter}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteneurSaisie: {
    padding: 10,
    backgroundColor: "#ffffff",
    borderTopColor: "#ededed",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100
  },
  conteneur: {
    flex: 1
  },
  conteneurLivres: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flex: 1
  },
  titre: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: "center"
  },
  livre: {
    padding: 20,
   flexDirection: 'row', 
     alignSelf: 'flex-start'
  },
  nom: {
    fontSize: 18
  },
  auteur: {
    fontSize: 14,
    color: "#999"
  },
  wrapper: {
    flex: 1
  },
  saisie: {
    height: 44,
    padding: 7,
    backgroundColor: "#ededed",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5
  },
  boutonAjouter: {
    fontSize: 28,
    lineHeight: 28
  },
  conteneurBoutonAjouter: {
    width: 80,
    height: 80,
    backgroundColor: "#ededed",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  }
});

// Mapping State <> Props
// La propriété `livres` sera accessible via this.props.livres
const mapStateToProps = state => ({
  livres: state.livreReducer.livres
});

const mapDispatchToProps = {
  // cette fonction ppurra être invoquée comme suit : this.props.dispatchAjouterLivre(OBJ_LIVRE)
  dispatchAjouterLivre: livre => ajouterLivre(livre),
  dispatchSupprimerLivre: id => supprimerLivre(id)
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListeLivres);
