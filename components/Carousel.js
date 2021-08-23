import React from 'react'
// import Carousel from 'react-native-snap-carousel'
import { Dimensions, View, Text } from 'react-native'
import { Item } from './Item'

export const MyCarousel = ({ pelicula }) => {

    const renderItem = data => <Item pelicula={data} />

    const { width } = Dimensions.get('window').width;

    return (
        <View>
{/* 
            <Carousel
                // layout={'default'}
                data={pelicula}
                keyExtractor={(peli) => peli.id}
                renderItem={renderItem}
                sliderWidth={width}
                ItemWidth={width - 10}
                windowSize={1}
                scrollInterpolator={scrollInterpolator}
                slideInterpolatedStyle={animatedStyles}
                useScrollView={true}          
            /> */}
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>

            <Text>{pelicula[0].name} Holas</Text>
        </View>
    )

}

