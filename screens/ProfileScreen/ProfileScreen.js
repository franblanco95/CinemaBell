import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Switch, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Avatar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { logout, lookupUser } from '../../store/actions/auth.actions';
import { ToggleTheme } from '../../store/actions/theme.action';
import { loadImageFromGallery } from '../../utils/permission';
// import * as FileSystem from 'expo-file-system'

export const ProfileScreen = () => {

    const dispatch = useDispatch();

    const theme = useSelector((themeReducer) => themeReducer);
    const [value, setValue] = useState(theme)
    const [imagen, setImagen] = useState()

    const user = useSelector(state => state.auth.data)
    const token = useSelector(state => state.auth.token)

    useEffect(() => {
        dispatch(lookupUser(token))
    }, [])

    // console.log(user)

    const changePhoto = async () => {
        const result = await loadImageFromGallery([1, 1])
        setImagen(result.uri)
    }

    // Funcion para cambiar la direccion temporal por una persistente

    // const fileName = imagen.split('/').pop()
    // console.log(`filename: ${fileName}`)
    // const Path = FileSystem.documentDirectory + fileName;
    // console.log(`Path: ${Path}`)
    // const resultado = FileSystem.moveAsync({ from: imagen, to: Path })
    // console.log(resultado)


    const closeSession = () => {
        dispatch(logout())
    }

    return (

        <View style={styles.container}>
            {!user
                ? <ActivityIndicator
                    size="large"
                    color="#e33e38"
                />
                : <>
                    <Avatar
                        rounded
                        size="large"
                        onPress={changePhoto}
                        containerStyle={styles.avatar}
                        source={
                            imagen !== undefined
                                ? { uri: imagen }
                                : require('../../assets/default-avatar.jpg')
                        }
                    />
                    <Text style={styles.nameText}>{user.users[0].displayName}</Text>

                    <View style={styles.configContainer}>

                        <View style={styles.item}>
                            <Text style={styles.text}>Modo Nocturno (En Proceso)</Text>
                            <Switch
                                value={value}
                                onValueChange={(val) => { setValue(val); dispatch(ToggleTheme(val)) }}
                                thumbColor={'#e33e38'}
                                trackColor={{ false: "#767577", true: "#ffffff" }}
                                ios_backgroundColor="#3e3e3e"
                            />
                            {/* {console.log(theme)} */}
                        </View>

                        <TouchableOpacity
                            style={styles.closeSessionButton}
                            onPress={closeSession}>
                            <Text style={styles.closeSessionText}>Cerrar Sesión</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }
        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16191e',
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        marginVertical: 15,
    },
    nameText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 20,
    },
    text: {
        color: 'white',
    },
    configContainer: {
        height: '100%',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2f3441',
        width: Dimensions.get('window').width - 50,
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
    },
    closeSessionButton: {
        alignItems: 'center',
        backgroundColor: '#e33e38',
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
    },
    closeSessionText: {
        color: 'white',
        fontWeight: 'bold',
    }
})
