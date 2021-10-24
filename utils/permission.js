import * as ImagePicker from 'expo-image-picker'
import { Alert } from 'react-native'

const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status !== 'granted') {
        Alert.alert(
            'Debes de darle permiso para acceder a las imágenes del teléfono.',
            [{ text: 'Ok' }],
        )
        return false;
    }
    return true;
}

export const loadImageFromGallery = async (array) => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: array,
        quality: 0.8,
    })
    return (image)
}


