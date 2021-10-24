import React from 'react'
import { ScrollView, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { selectEstreno } from '../store/actions/estrenos.actions'

export const FuturosEstrenos = ({ estrenos, navigation }) => {


    const dispatch = useDispatch();

    const HandleSelectedEstreno = (estrenos) => {
        dispatch(selectEstreno(estrenos.id));
        navigation.navigate('Estreno', {
            id: estrenos.id,
            name: `${estrenos.name}`
        })
    }

    return (

        <ScrollView
            contentContainerStyle={styles.container}
            horizontal
        >
            {estrenos?.map(estrenos => {
                return (
                    <TouchableOpacity key={estrenos.id} onPress={() => HandleSelectedEstreno(estrenos)}>
                        <Image
                            style={styles.imagen}
                            resizeMode='cover'
                            source={estrenos.img}
                            PlaceholderContent={< ActivityIndicator color="#fff" />}
                        />
                    </TouchableOpacity>
                )
            })}

        </ScrollView >

    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    imagen: {
        width: 125,
        height: 200,
        marginHorizontal: 13,
    }

})

