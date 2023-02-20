import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import { StackScreenProps } from '@react-navigation/stack';
import Animated, { multiply, min } from 'react-native-reanimated';
import { albumData, Content, Cover, Header, HEADER_DELTA, MAX_HEADER_HEIGHT } from '@components/animatedHeader';
import { colors } from '@styles';
import { FeatureStackParamsList } from '../../navigation/tabs/Features';
import { addTracks, play, setupPlayer } from '@src/services/playbackService';


export type Props = StackScreenProps<FeatureStackParamsList, 'AnimatedHeader'>;

const AnimatedHeader = ({ navigation }: Props) => {

    const { current: scrollY } = React.useRef(new Animated.Value(0));

    const translateY = multiply(min(scrollY, HEADER_DELTA + 40 * 0.0001), -1);
    const tracks = albumData.tracks.map(track => ({
        url: track.url,
        title: track.title,
        artist: albumData.artist,
        artwork: require('../../assets/posty.jpeg')
    }));

    setupPlayer();

    const queueAllAndPlay = () => {
        addTracks(tracks);
        navigation.navigate('Player', { trackIndex: 0 });
        play();
    };

    return (
        <View style={styles.viewContainer}>
            <Cover scrollY={scrollY} />
            <Content scrollY={scrollY} />
            <Header scrollY={scrollY} />
            <Animated.View style={[styles.buttonContainer, {
                transform: [{ translateY }]
            }]}>
                <Button onPress={queueAllAndPlay} style={styles.button}>
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
    buttonContainer: {
        position: 'absolute',
        top: MAX_HEADER_HEIGHT - 40 / 2,
        left: 0,
        right: 0
    },
    button: {
        borderRadius: 100,
        height: 40,
        width: 200,
        alignSelf: 'center',
        alignContent: 'center'
    }
});

export default AnimatedHeader;
