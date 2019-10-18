import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'

/**
 * Le composant saisie est un composant sans état.
 *
 * Il reçoit deux propriétés du composant parent :
 *
 * * `texteSaisie` : il s'agit du libellé à afficher dans le champ texte de saisie. Il va alimenter la propriété `value` de l'élément <TextInput>
 * * `evtTexteModifie`  : fonction permettant de notifier le composant parent qu'une modification a eu lieu.
 *
 * TODO 1. Appliquer le style conteneurSaisie à l'élément <View>
 *
 * TODO 2. Appliquer le style texteSaisie à l'élément <TextInput>
 *
 * TODO 3. Valoriser la propriété `value` de l'élément <TextInput> avec la valeur de `texteSaisie`
 *
 * TODO 4. Valoriser la propriété `onChangeText` de l'élément <TextInput> avec la valeur de `evtTexteModifie`
 */
const Saisie = ({texteSaisie, evtTexteModifie}) => (
    <View>
        <TextInput
            placeholder='Quelle prochaine action ?'
            placeholderTextColor='#CACACA'
            selectionColor='#666666'/>
    </View>
)


const styles = StyleSheet.create({
    conteneurSaisie: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: {width: 2, height: 2},
    },
    texteSaisie: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
    },
})
export default Saisie