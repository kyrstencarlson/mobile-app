import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import { StackScreenProps } from '@react-navigation/stack';
import Animated, { multiply, min } from 'react-native-reanimated';
import { Content, Cover, Header, HEADER_DELTA, MAX_HEADER_HEIGHT } from '../components/animatedHeader';
import { colors } from '../styles';
import { FeatureStackParamsList } from '../navigation/tabs/Features';


export type Props = StackScreenProps<FeatureStackParamsList, 'AnimatedHeader'>;

const AnimatedHeader = () => {

    const { current: scrollY } = React.useRef(new Animated.Value(0));

    const translateY = multiply(min(scrollY, HEADER_DELTA + 40 * 0.0001), -1);

    return (
        <View style={styles.viewContainer}>
            <Cover scrollY={scrollY} />
            <Content scrollY={scrollY} />
            <Header scrollY={scrollY} />
            <Animated.View style={[styles.nextWorkout, {
                transform: [{ translateY }]
            }]}>
                <Button style={{
                    borderRadius: 100,
                    height: 40,
                    width: 200,
                    alignSelf: 'center',
                    alignContent: 'center'
                }}>
                    <Text color='black'>Shuffle</Text>
                </Button>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        paddingHorizontal: 0
    },
    viewContainer: {
        flex: 1,
        height: '100%',
        backgroundColor: colors.secondaryBg
    },
    nextWorkout: {
        position: 'absolute',
        top: MAX_HEADER_HEIGHT - 40 / 2,
        left: 0,
        right: 0
    }
});

export default AnimatedHeader;
