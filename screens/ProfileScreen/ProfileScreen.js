import React, { useState } from 'react'
import { View, Text, StyleSheet, Switch, Dimensions } from 'react-native'
import { Avatar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleTheme } from '../../store/actions/theme.action';


export const ProfileScreen = () => {

    const dispatch = useDispatch();
    const theme = useSelector(({ themeReducer }) => themeReducer);
    const [value, setValue] = useState(theme)

    return (
        <View style={styles.container}>
            <View style={styles.picture}></View>
            {/* <Avatar
                rounded
                size="large"
                containerStyle={styles.avatar}
                source={
                    user.photoURL
                        ? { uri: photoURL }
                        : require('../../assets/default-avatar.jpg')
                }
            /> */}
            <Text style={styles.text}>Francisco Blanco</Text>

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

            <View style={styles.item}>
                <Text style={styles.text}>Modo Nocturno</Text>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16191e',
        alignItems: 'center',
        height: 800,
    },
    avatar: {

    },
    picture: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: 100,
        height: 100,
        marginVertical: 15,
    },
    text: {
        color: 'white',
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
    }
})
