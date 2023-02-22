import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@styles';
import Animated from 'react-native-reanimated';
import { MIN_HEADER_HEIGHT } from './Header';
import { Pressable, Text } from 'native-base';
import { Tabs } from '../Tabs';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FeatureStackParamsList } from '@src/navigation/tabs/Features';
import { addTracks, play, reset } from '@src/services/playbackService';

export const albumData = {
    title: 'Hollywood\'s Bleeding',
    artist: 'Post Malone',
    release_date: '2019-09-06T07:00:00Z',
    genre: 'Hip-Hop/Rap',
    description: '“I\'m not trying to make anything massive, I\'m not trying to make hit records,” Post Malone tells Apple Music\'s Zane Lowe. It\'s somewhat unconvincing coming from one of the most popular artists on the planet, but whatever he\'s doing, it\'s working. His third full-length album, Hollywood\'s Bleeding, is bright and adventurous. Sure, it\'s filled with all the flexing and bravado he\'s known for, and features from Meek Mill, Travis Scott, Young Thug, Swae Lee, and more prove that Post hasn\'t veered too far from hip-hop. But it\'s also more sentimental, gentle, and pop-focused than ever. “Allergic” and “A Thousand Bad Times” are bouncy and melodic, and “I\'m Gonna Be” is a joyous celebration of having fun and living your own truth. It\'s fun to hear about Post\'s opulent lifestyle, but he knows his fans, and he knows how to connect with them on a more grounded level. “It means a lot that if somebody is hundreds of thousands of miles away, they can sit and relate to the music,” he says. “And they come up to me to say something like, ‘Hey, I don\'t want a picture, I just wanted to say your song saved my life.\'” Beneath the Versace boxers and mink coats, Post is clearly wounded, and breakup tracks abound on the album\'s more down-toearth, relatable side. Future and Halsey feature on album highlight “Die For Me,” a slick, bitter attack on a lying ex-lover. Each artist takes turns airing dirty laundry and singing the chorus: “Said you\'d take a bullet, told me you would die for me/I had a really bad feeling you been lying to me.” “Staring at the Sun” is a gorgeous synth-pop collaboration with SZA about the final throes of a doomed relationship: “If you keep staring at the sun, you won\'t see what you have become/This can\'t be everything you thought it was, blinded by the thought of us.” “I want to do something weird and funky,” he tells Lowe, preparing listeners for the album\'s more surprising moments. Kanye West cowrote (but doesn\'t appear on) “Internet,” a rejection of social media and technology which blooms into a majestic orchestral arrangement. But the most unlikely collaboration on the album—and possibly of 2019 as a whole—can be found on “Take What You Want,” featuring Travis Scott and Ozzy Osbourne. Scott\'s smoky Auto-Tune isn\'t the most natural accompaniment to an eerie Black Sabbath-esque riff and scorching guitar solo, but, somehow, it works.',
    about: 'When Austin Post uploaded “White Iverson” to social media in early 2015, he was 19, scrounging for ramen and sleeping in a friend\'s closet. Plenty has changed, but Post\'s appeal is more or less the same. No matter how platinum the records go, he still has the air of an ordinary guy, a Crocs-and-Bud-Light kid from the suburbs who stumbled backward into fame just by strumming what was in his heart. Post didn\'t just look past genre, he broke it down, mixing the dark grandeur of trap with the anthemic release of classic rock and country. His signature tracks—“rockstar,” “Sunflower,” “Congratulations”—were both bleak and beautiful, spaced-out and mainstream, hip-hop but not quite. The bass boomed, the melodies soared, and there was Post in the middle, rap-singing his woes like a lonely prince self-exiled in the castle. At live shows, there were no dancers, no pyrotechnics, just Post, in a baggy football jersey with a cigarette in his hand, bringing 60,000 people into his bedroom: The pop star as moody teen. Born in 1995 in Syracuse, New York, and raised in the suburbs of Dallas, Post grew up on a mix of country, classic rock, and rap: in one well-circulated anecdote, young Post would get called into the living room to entertain dad and friends with the dance to Terror Squad\'s “Lean Back.” He turned a love for the video game Guitar Hero into a love of actual guitar, playing in a metal band during high school while also starting to explore hip-hop. “White Iverson” led to Post\'s 2016 debut, Stoney; beerbongs & bentleys burrowed further into Post\'s luxurious, messy melancholy, while 2019\'s Hollywood\'s Burning found him buttoning up and moving closer to the conventions of mainstream pop, all while retaining his peculiar touch',
    tracks: [
        {
            title: 'Hollywood\'s Bleeding',
            duration: '2:36',
            url: require('../../assets/hollywoods-bleeding.mp3')
        },
        {
            title: 'Saint-Tropez',
            duration: '2:30',
            url: require('../../assets/saint-tropez.mp3')
        },
        {
            title: 'Enemies (feat. DaBaby)',
            duration: '3:16',
            url: require('../../assets/enemies.mp3')
        },
        {
            title: 'Allergic',
            duration: '2:36',
            url: require('../../assets/allergic.mp3')
        },
        {
            title: 'A Thousand Bad Times',
            duration: '3:41',
            url: require('../../assets/thousand-bad-times.mp3')
        },
        {
            title: 'Circles',
            duration: '3:35',
            url: require('../../assets/circles.mp3')
        },
        {
            title: 'Die For Me (feat. Future & Halsey)',
            duration: '4:05',
            url: require('../../assets/die-for-me.mp3')
        },
        {
            title: 'On the Road (feat. Meek Mill & Lil Baby)',
            duration: '3:38',
            url: require('../../assets/on-the-road.mp3')
        },
        {
            title: 'Take What You Want (feat. Ozzy Osbourne & Travis Scott)',
            duration: '3:49',
            url: require('../../assets/take-what-you-want.mp3')
        },
        {
            title: 'I\'m Gonna Be (feat. Justin Bieber)',
            duration: '3:20',
            url: require('../../assets/im-gonna-be.mp3')
        },
        {
            title: 'Staring at the Sun (feat. SZA)',
            duration: '2:48',
            url: require('../../assets/staring-at-the-sun.mp3')
        },
        {
            title: 'Internet (feat. Kanye West)',
            duration: '2:03',
            url: require('../../assets/internet.mp3')
        },
        {
            title: 'Goodbyes (feat. Young Thug)',
            duration: '2:54',
            url: require('../../assets/goodbyes.mp3')
        },
        {
            title: 'Myself',
            duration: '2:38',
            url: require('../../assets/myself.mp3')
        },
        {
            title: 'I Know',
            duration: '2:21',
            url: require('../../assets/i-know.mp3')
        },
        {
            title: 'Wow.',
            duration: '2:29',
            url: require('../../assets/wow.mp3')
        }
    ]
};

const ShowText = ({ text }: { text: string }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </View>
);

interface Props {
    scrollY: Animated.Value<number>;
}

const Data = ({ scrollY }: Props) => {

    const translateY = Animated.multiply(Animated.min(scrollY, MIN_HEADER_HEIGHT + 40 / 2), -0.00001);
    const navigation = useNavigation<StackNavigationProp<FeatureStackParamsList>>();

    const tabTitles = [
        'Album',
        'Details',
        'Artist'
    ];

    const onPressTrack = (trackIndex: number) => {

        reset();
        navigation.navigate('Player', { trackIndex });

        const tracks = albumData.tracks.slice(trackIndex, albumData.tracks.length).map(track => ({
            url: track.url,
            title: track.title,
            artist: albumData.artist,
            artwork: require('../../assets/posty.jpeg')
        }));

        addTracks(tracks);
        play();
    };

    const tabComponent: { [key: string]: any } = {
        'Details': <ShowText text={albumData.description} />,
        'Artist': <ShowText text={albumData.about} />,
        'Album': <View style={{ marginTop: 10 }}>
            {albumData.tracks.map((track, i) => (
                <Pressable key={track.title} onPress={() => onPressTrack(i)} style={styles.listItem}>
                    <Text style={[styles.text, styles.item]}>{track.title}</Text>
                    <Text style={styles.text}>{track.duration}</Text>
                </Pressable>
            ))}
        </View>

    };

    const tabs = tabTitles.map(title => ({
        key: title.toLowerCase(),
        title,
        component: tabComponent[title]
    }));

    return (
        <Animated.View style={[styles.tabContainer, {
            transform: [{ translateY }]
        }]}>
            <Tabs tabs={tabs} tabWidth={`${tabTitles.length * 22.5}%`} />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    addWorkoutIconContainer: {
        flexDirection: 'row',
        position: 'absolute',
        right: 15,
        top: 35,
        height: 30
    },
    tabContainer: {
        height: '100%',
        marginTop: '5%',
        paddingTop: '8%'
    },
    completeContainer: {
        alignSelf: 'center',
        height: 30
    },
    addIcon: {
        color: colors.text,
        fontSize: typography.xxxl,
        justifyContent: 'center',
        top: -1
    },
    gradient: {
        justifyContent: 'center',
        marginRight: spacing.sm
    },
    container: {
        padding: spacing.lg
    },
    text: {
        color: colors.text,
        fontSize: typography.md,
        fontWeight: typography.semi_thin
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },
    item: {
        flexWrap: 'wrap',
        width: '80%'
    }
});

export { Data };
