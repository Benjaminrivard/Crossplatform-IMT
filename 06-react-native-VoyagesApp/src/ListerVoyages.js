import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native'

import MessageCentre from './MessageCentre'

import { couleurs } from './Theme'

export default class ListerVoyages extends React.Component {

    static navigationOptions = {
        title: 'Voyages',
        headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: '400'
        }
    }

    render() {
        // TODO récupérer les voyages depuis l'état global de l'application (App.js)
        const voyages = []

        // TODO implémenter la navigation vers la page de détail d'un voyage
        return (
            <ScrollView contentContainerStyle={[!voyages.length && {flex: 1}]}>

                <View style={[!voyages.length && {justifyContent: 'center', flex: 1}]}>
                    {
                        !voyages.length && <MessageCentre message='Pas encore de voyage !'/>
                    }
                    {
                        voyages.map((voyage, index) => (
                            <TouchableWithoutFeedback key={index}>
                                <View style={styles.conteneurVoyage}>
                                    <Text style={styles.ville}>{voyage.ville}</Text>
                                    <Text style={styles.pays}>{voyage.pays}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        ))
                    }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    conteneurVoyage: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: couleurs.primaire
    },
    ville: {
        fontSize: 20,
    },
    pays: {
        color: 'rgba(0, 0, 0, .5)'
    },
})