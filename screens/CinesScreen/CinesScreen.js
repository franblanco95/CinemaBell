import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { LocationSelector } from '../../components/LocationSelector'

export const CinesScreen = () => {

    // const [selectedLocation, setSelectedLocation] = useState()

    const initialRegion = {
        latitude: -34.870932294296956,
        longitude: -58.04583096324361,
        latitudeDelta: 0.01,
        longitudeDelta: 0.02,
    };

    // const handleSelectLocation = event => {
    //     setSelectedLocation({
    //         lat: event.nativeEvent.coordinate.latitude,
    //         lng: event.nativeEvent.coordinate.longitude,
    //     })
    // }

    // let markerCoordinates;

    // if (selectedLocation) {
    //     markerCoordinates = {
    //         latitude: selectedLocation.lat,
    //         longitude: selectedLocation.lng,
    //     }
    // }

    // const [location, setLocation] = useState();

    // const handlePickLocation = (loc) => {
    //     setLocation(loc);
    // }

    return (
        // {/* <LocationSelector onLocation={handlePickLocation} /> */}
        <View style={styles.container}>

            <Text></Text>




            <MapView
                initialRegion={initialRegion}
                style={styles.map}
            // onPress={handleSelectLocation}
            >

                <Marker
                    title="Cinema Bell"
                    description="Cine"
                    coordinate={initialRegion}

                />

            </MapView>
        </View>


    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#16191e',
        alignItems: 'center',
    },
    map: {
        marginTop: 25,
        width: Dimensions.get('window').width - 60,
        height: Dimensions.get('window').height - 250,
    }

})