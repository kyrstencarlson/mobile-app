import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Pressable, Text } from 'native-base';
import { Layout } from '@components/shared';
import { Icon } from '@utils/Icon';
import ThemeConfig from '@styles/theme';
import { State, usePlaybackState } from 'react-native-track-player';
import { playNextTrack, playPreviousTrack, play, pauseTrack } from '@src/services/playbackService';


const Player = () => {

    const state = usePlaybackState();
    const isPlaying = state === State.Playing;

    const togglePlay = () => {
        if (isPlaying) {
            pauseTrack();
        }

        play();
    };

    return (
        <Layout style={styles.container}>
            <Text>The TrackPlayer is {isPlaying ? 'playing' : 'not playing'}</Text>

            <View style={styles.controller}>
                <Pressable onPress={playPreviousTrack}>
                    <Icon name='backward' type='FontAwesome5' />
                </Pressable>

                <Pressable onPress={togglePlay}>
                    <Icon name={isPlaying ? 'pause' : 'play'} type='FontAwesome5' />
                </Pressable>

                <Pressable onPress={playNextTrack}>
                    <Icon name='forward' type='FontAwesome5' />
                </Pressable>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    controller: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%',
        padding: 20,
        borderRadius: 20,
        backgroundColor: ThemeConfig.colors.gray[300]
    }
});

export default Player;
