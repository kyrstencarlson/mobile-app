import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { Extrapolate, interpolateNode } from 'react-native-reanimated';
import { MAX_HEADER_HEIGHT } from './Header';
import { Text } from 'native-base';
import { colors, spacing, typography } from '../../styles';
import { Data } from './Data';
import LinearGradient from 'react-native-linear-gradient';
import { albumData } from './Data';


interface Props {
    scrollY: Animated.Value<number>;
}

const Content = ({ scrollY }: Props) => {

    const opacity = interpolateNode(scrollY, {
        inputRange: [-MAX_HEADER_HEIGHT / 2, 0, MAX_HEADER_HEIGHT / 1.5],
        outputRange: [0, 1, 0],
        extrapolate: Extrapolate.CLAMP
    });

    return (
        <Animated.ScrollView
            testID='program-content-scroll'
            style={styles.scroll}
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={1}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
        >
            <View>
                <View style={{ height: MAX_HEADER_HEIGHT - 40 / 2 }}>
                    <LinearGradient
                        style={[StyleSheet.absoluteFill, {
                            height: MAX_HEADER_HEIGHT
                        }]}
                        start={{
                            x: 0,
                            y: 0.3
                        }}
                        end={{
                            x: 0,
                            y: 1
                        }}
                        colors={['transparent', 'rgba(0, 0, 0, 0.2)', '#2D343A']}
                    />
                </View>

                <View style={styles.textContainer}>
                    <View style={styles.imageTextContainer}>
                        <Animated.View style={[styles.textAlign, { opacity }]}>
                            <Text color='white' fontSize={typography.xxl} fontWeight='semi_bold'>
                                {albumData.title}
                            </Text>
                        </Animated.View>

                        <Animated.View style={[styles.textAlign, {
                            marginVertical: spacing.sm,
                            opacity
                        }]}>
                            <Text fontSize='lg' color='white' italic>
                                {albumData.artist}
                            </Text>
                        </Animated.View>

                        <Animated.View style={[styles.subscriptionTagContainer, { opacity }]}>
                            <Text style={[styles.textAlign, { textTransform: 'uppercase' }]} fontWeight='semi_bold' fontSize='sm' color='white'>
                                {albumData.genre}
                            </Text>
                        </Animated.View>

                    </View>
                </View>
            </View>

            <Data scrollY={scrollY} />

        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: {
        height: '100%'
    },
    container: {
        flexGrow: 1
    },
    imageTextContainer: {
        position: 'absolute',
        top: '40%',
        width: '100%'
    },
    subscriptionTagContainer: {
        alignSelf: 'center',
        backgroundColor: colors.primaryBg,
        width: '30%',
        padding: 5,
        borderRadius: 5
    },
    textAlign: {
        alignSelf: 'center'
    },
    textContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export { Content };
