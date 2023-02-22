import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Pressable, Text } from 'native-base';
import { Layout } from '@components/shared';
import { Icon } from '@utils/Icon';
import ThemeConfig from '@styles/theme';
import TrackPlayer, { Event, State, usePlaybackState, useProgress, useTrackPlayerEvents } from 'react-native-track-player';
import { playNextTrack, playPreviousTrack, play, pauseTrack } from '@src/services/playbackService';
import { StackScreenProps } from '@react-navigation/stack';
import { FeatureStackParamsList } from '@src/navigation/tabs/Features';

type Props = StackScreenProps<FeatureStackParamsList, 'Player'>;

const Player = (props: Props) => {

    const state = usePlaybackState();
    const progress = useProgress();
    const isPlaying = state === State.Playing;

    const [trackTitle, setTrackTitle] = React.useState<string>();

    React.useEffect(() => {
        const currentTrack = async () => {
            const trackIndex = await TrackPlayer.getCurrentTrack();

            console.log('trackIndex', trackIndex);

            if (!trackIndex) { return setTrackTitle('No Track Playing'); }


            const track = await TrackPlayer.getTrack(trackIndex);

            console.log('track', track);
            const { title } = track || {};
            setTrackTitle(title);
        };

        currentTrack();

    }, []);


    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {

        if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
            const track = await TrackPlayer.getTrack(event.nextTrack);
            const { title } = track || {};
            setTrackTitle(title);
        }
    });


    const togglePlay = () => {
        if (isPlaying) {
            return pauseTrack();
        }

        play();
    };

    return (
        <Layout style={styles.container}>
            <Text>The TrackPlayer is {isPlaying ? 'playing' : 'not playing'}</Text>
            <Text>Current Track: {trackTitle}</Text>

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
