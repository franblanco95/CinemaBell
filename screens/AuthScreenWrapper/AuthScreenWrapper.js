import React from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const AuthScreenWrapper = ({ children, title, message, buttonText, buttonPath }) => {

    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView
            behavior="height"
            style={styles.screen}
        >

            <View style={styles.screen}>
                <Text style={styles.title}>{title}</Text>
                {children}
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>{message}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(buttonPath)}>
                        <Text style={styles.promptButton}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 18,
        textAlign: 'center',

    }
});