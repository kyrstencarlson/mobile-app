import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import { DetailsStackParamsList } from '../../navigation/Details';
import { StackScreenProps } from '@react-navigation/stack';
import Animated, { multiply, min, interpolateNode } from 'react-native-reanimated';
import { colors } from '../../styles';
import { Cover } from './Cover';
import { Header, HEADER_DELTA, MAX_HEADER_HEIGHT } from './Header';
import { Content } from './Content';


export type Props = StackScreenProps<DetailsStackParamsList, 'AnimatedHeader'>;

const AnimatedHeader = () => {

    const { current: scrollY } = React.useRef(new Animated.Value(0));

    const translateY = multiply(min(scrollY, HEADER_DELTA + 40 * 0.8), -1);
    const scale = interpolateNode(scrollY, {
        inputRange: [-HEADER_DELTA, 0, HEADER_DELTA + 40 * 0.8, HEADER_DELTA + 40 * 0.8 + 1],
        outputRange: [1, 1, 0.85, 0.85]
    });

    return (
        <View style={styles.viewContainer}>
            <Cover scrollY={scrollY} />
            <Content scrollY={scrollY} />
            <Header scrollY={scrollY} />
            <Animated.View style={[styles.nextWorkout, {
                transform: [{ translateY }, { scale }]
            }]}>
                <Button style={{
                    borderRadius: 100,
                    height: 40,
                    width: 200,
                    alignSelf: 'center',
                    alignContent: 'center'
                }}>
                    <Text color='black'>Play</Text>
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
