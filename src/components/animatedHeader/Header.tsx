import React from 'react';
import { colors } from '../../styles';
import { Platform, StyleSheet } from 'react-native';
import Animated, { Extrapolate, interpolateNode } from 'react-native-reanimated';
import { Text } from 'native-base';
import { typography } from '../../styles';
import { deviceHeight } from '../../utils/dimensions';

interface Props {
    scrollY: Animated.Value<number>;
}

const alpha = (1 + Math.sqrt(5)) / 2;

export const MIN_HEADER_HEIGHT = Platform.OS === 'ios' ? 140 : 100;
export const MAX_HEADER_HEIGHT = deviceHeight * (1 - 1 / alpha);
export const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;


const Header = (props: Props) => {

    const { scrollY } = props;

    const opacity = interpolateNode(scrollY, {
        inputRange: [HEADER_DELTA - 100, HEADER_DELTA - 32],
        outputRange: [0, 1],
        extrapolate: Extrapolate.CLAMP
    });

    const textOpacity = interpolateNode(scrollY, {
        inputRange: [HEADER_DELTA - 48, HEADER_DELTA - 32],
        outputRange: [0, 1],
        extrapolate: Extrapolate.CLAMP
    });

    const top = Platform.select({
        ios: '37.5%',
        android: '10.5%'
    });

    return (
        <Animated.View style={[styles.container, { opacity }]}>
            <Animated.View style={[styles.imageTextContainer, {
                top,
                opacity: textOpacity
            }]}>
                <Text style={styles.text}>
                    Hollywood's Bleeding
                </Text>
            </Animated.View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: MIN_HEADER_HEIGHT,
        position: 'absolute',
        backgroundColor: colors.primaryBg,
        top: 0,
        left: 0,
        right: 0
    },
    imageTextContainer: {
        position: 'absolute',
        top: '37.5%',
        width: '100%'
    },
    text: {
        fontSize: typography.lg,
        color: colors.white,
        textAlign: 'center'
    }
});

export { Header };
