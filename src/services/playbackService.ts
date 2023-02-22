import TrackPlayer, { Event, Track, IOSCategory, IOSCategoryOptions, AppKilledPlaybackBehavior, State } from 'react-native-track-player';

export const setupPlayer = async () => {
    await TrackPlayer.setupPlayer({
        iosCategory: IOSCategory.Playback,
        iosCategoryOptions: [IOSCategoryOptions.MixWithOthers]
    });

    TrackPlayer.updateOptions({
        android: {
            appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback
        }
    });
};

export const playbackService = async () => {
    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
};

export const reset = async () => {
    await TrackPlayer.reset();
};

export const addTracks = async (tracks: Track[]) => {
    await TrackPlayer.add(tracks);
};

export const addTrack = async (track: Track) => {
    await TrackPlayer.add(track);
};

export const playNextTrack = async () => {
    await TrackPlayer.skipToNext();
};

export const playPreviousTrack = async () => {
    await TrackPlayer.skipToPrevious();
};

export const pauseTrack = async () => {
    await TrackPlayer.pause();
};

export const play = async () => {
    await TrackPlayer.play();
};

export const playTrack = async (index: number) => {
    await TrackPlayer.skip(index);
    await TrackPlayer.play();
};
