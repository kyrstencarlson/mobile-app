/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/Settings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, ViewStyle } from 'react-native';
import { deviceHeight } from '@utils/dimensions';
import { useColorMode } from 'native-base';
import { navRef } from '../../App';
import ThemeConfig from '@styles/theme';
import FeatureStack from './tabs/Features';
import HomeStack from './tabs/Home';

const Tab = createBottomTabNavigator();

const MainStack = () => {

    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const colors = ThemeConfig.colors;

    const backgroundColor = isDark ? colors.gray[600] : colors.gray[300];
    const tint = isDark ? colors.lightBlue[300] : colors.lightBlue[600];
    const inactive = isDark ? colors.gray[300] : colors.gray[600];

    const renderScreenOptions = () => {
        const tabBarStyle: ViewStyle = {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: deviceHeight / 11,
            margin: 20,
            alignContent: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            paddingTop: 20,
            display: 'flex',
            backgroundColor
        };

        const screenName = navRef.current?.getCurrentRoute()?.name;
        const hideTabBar = [
            'AnimatedHeader'
        ];

        if (screenName && hideTabBar.includes(screenName)) {
            tabBarStyle.display = 'none';
        }

        return {
            tabBarStyle,
            tabBarShowLabel: false,
            tabBarActiveTintColor: tint,
            tabBarInactiveTintColor: inactive,
            headerShown: false
        };
    };

    return (
        <Tab.Navigator
            initialRouteName='HomeStack'
            screenOptions={renderScreenOptions}
        >
            <Tab.Screen
                name='HomeStack'
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name='home'
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='FeatureStack'
                component={FeatureStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name='book'
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Settings'
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name='settings'
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBarBackground: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: deviceHeight / 11,
        margin: 20,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        paddingTop: 20
    }
});

export default MainStack;
