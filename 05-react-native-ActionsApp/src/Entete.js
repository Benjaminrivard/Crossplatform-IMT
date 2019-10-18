import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

/**
 * Le composant Entete représente le titre de l'application.
 *
 * Il affiche le libellé "Actions !"
 *
 * TODO 1. Corriger le titre de l'application.
 *
 * TODO 2. Appliquer le style "entete" à l'élément <View>
 *
 * TODO 3. Appliquer le style "texteEntete" à l'élément <Text>
 */
export default Entete = () => (
    <View>
        <Text>Entete</Text>
    </View>
)

const styles = StyleSheet.create({
    // style à appliquer à l'élément <View>
    entete: {
        marginTop: 80
    },
    // style à appliquer à l'élément <Text>
    texteEntete: {
        textAlign: 'center',
        fontSize: 72,
        color: 'rgba(175, 47, 47, 0.25)',
        fontWeight: '100'
    },
})