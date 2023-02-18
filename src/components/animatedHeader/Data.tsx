import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../styles';
import Animated from 'react-native-reanimated';
import { MIN_HEADER_HEIGHT } from './Header';
import { Text } from 'native-base';
import { Tabs } from '../Tabs';


interface Props {
    scrollY: Animated.Value<number>;
}

const Data = ({ scrollY }: Props) => {

    const translateY = Animated.multiply(Animated.min(scrollY, MIN_HEADER_HEIGHT + 40 / 2), -0.00001);

    const tabTitles = [
        'Album',
        'Details',
        'Artist'
    ];


    const tabComponent: { [key: string]: any } = {
        'Details': <View><Text>Description</Text></View>,
        'Album': <View><Text>Album List</Text></View>,
        'Artist': <View><Text>Artist List</Text></View>
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
        backgroundColor: colors.secondaryBg,
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
    }
});

export { Data };
