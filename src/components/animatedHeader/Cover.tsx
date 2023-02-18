/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { Extrapolate, interpolateNode } from 'react-native-reanimated';
import { HEADER_DELTA, MAX_HEADER_HEIGHT } from './Header';
import { colors } from '../../styles';
import { Image } from 'native-base';
import { deviceWidth } from '../../utils/dimensions';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require('../../assets/posty.jpeg');

interface Props {
    scrollY: Animated.Value<number>
}

const Cover = ({ scrollY }: Props) => {

    const scale = interpolateNode(scrollY, {
        inputRange: [-MAX_HEADER_HEIGHT, 0],
        outputRange: [3, 1],
        extrapolateRight: Extrapolate.CLAMP
    });

    const opacity = interpolateNode(scrollY, {
        inputRange: [-16, 0, HEADER_DELTA / 2.5],
        outputRange: [0, 0.2, 1],
        extrapolate: Extrapolate.CLAMP
    });

    return (
        <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
            <View testID='program-header-image'>
                <Image style={styles.image} source={image} size={'xl'} alt='album art'/>
            </View>
            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor: colors.secondaryBg,
                    height: '100%',
                    opacity
                }}
            />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: MAX_HEADER_HEIGHT,
        width: deviceWidth
    },
    image: {
        height: '100%',
        width: '100%'
    }
});

export { Cover };
