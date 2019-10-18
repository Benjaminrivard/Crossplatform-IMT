import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BoutonAction from './BoutonAction'

/**
 * Composant représentant une action.
 *
 * TODO modifier le code pour afficher le titre de l'action et les boutons associés.
 */
const UneAction = () => (
    <View style={styles.conteneurUneAction}>
        <Text style={styles.texteUneAction}>
            Ici bientôt le titre de l'action
        </Text>
        <View style={styles.boutons}>

        </View>
    </View>
)

const styles = StyleSheet.create({
    conteneurUneAction: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        flexDirection: 'row',
        alignItems: 'center'
    },
    texteUneAction: {
        fontSize: 17
    },
    boutons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
})
export default UneAction