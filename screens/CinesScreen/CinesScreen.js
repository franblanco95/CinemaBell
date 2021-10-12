import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { LocationSelector } from '../../components/LocationSelector'
import MapView, { Marker } from 'react-native-maps';

export const CinesScreen = () => {

    const [selectedLocation, setSelectedLocation] = useState()

    const initialRegion = {
        latitude: -34.870932294296956,
        longitude: -58.04583096324361,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const handleSelectLocation = event => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude,
        })
    }

    if (selectedLocation) {
        markerCoordinates = {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
        }
    }

    // const [location, setLocation] = useState();

    // const handlePickLocation = (loc) => {
    //     setLocation(loc);
    // }

    return (
        // {/* <LocationSelector onLocation={handlePickLocation} /> */}

        <MapView
            initialRegion={initialRegion}
            style={styles.container}
            onPress={handleSelectLocation}
        >
            {markerCoordinates && (
                <Marker
                    title="Ubicacion Seleccionada"
                    coordinate={markerCoordinates} />
            )}
        </MapView>



    )
}

const styles = StyleSheet.create({

    container: {
        padding: 20,
        backgroundColor: 'black',
        height: 800,
    },
    text: {
        color: 'white',
    }

})