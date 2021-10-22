import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Switch, Dimensions, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { logout, lookupUser } from '../../store/actions/auth.actions';
import { ToggleTheme } from '../../store/actions/theme.action';
import { loadImageFromGallery } from '../../utils/permission';


export const ProfileScreen = () => {

    const dispatch = useDispatch();

    const theme = useSelector(({ themeReducer }) => themeReducer);
    const [value, setValue] = useState(theme)

    const user = useSelector(state => state.auth.data)
    const token = useSelector(state => state.auth.token)

    useEffect(() => {
        dispatch(lookupUser(token))
    }, [])

    console.log(user)


    const changePhoto = async () => {
        const result = await loadImageFromGallery([1, 1])
        console.log(result)
    }

    const closeSession = () => {
        dispatch(logout())
    }

    return (
        <>
            {!user
                ? <Text>Hola</Text>
                :
                <View style={styles.container}>
                    <Avatar
                        rounded
                        size="large"
                        onPress={changePhoto}
                        containerStyle={styles.avatar}
                        source={
                            user.photoURL
                                ? { uri: photoURL }
                                : require('../../assets/default-avatar.jpg')
                        }
                    />
                    <Text style={styles.text}>{user.users[0].displayName}</Text>

                    <View style={styles.configContainer}>

                        <View style={styles.item}>
                            <Text style={styles.text}>Modo Nocturno</Text>
                            {console.log(theme)}
                            <Switch
                                value={value}
                                onValueChange={(val) => { setValue(val); dispatch(ToggleTheme(val)) }}
                                thumbColor={'#e33e38'}
                                trackColor={{ false: "#767577", true: "#ffffff" }}
                                ios_backgroundColor="#3e3e3e"
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.closeSessionButton}
                            onPress={closeSession}>
                            <Text style={styles.text}>Cerrar Sesión</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </>
    )

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16191e',
        alignItems: 'center',
        height: Dimensions.get('window').height - 60,
    },
    avatar: {

    },
    avatar: {
        width: 100,
        height: 100,
        marginVertical: 15,
    },
    text: {
        color: 'white',
    },
    configContainer: {
        height: '60%',
        justifyContent: 'space-between',
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
        width: Dimensions.get('window').width - 50,
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,

    }
})
