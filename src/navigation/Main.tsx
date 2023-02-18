/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/Settings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import { deviceHeight } from '../utils/dimensions';
import { useColorMode } from 'native-base';
import HomeStack from './Home';
import DetailsStack from './Details';

const Tab = createBottomTabNavigator();

const MainStack = () => {

    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const backgroundColor = isDark ? 'dimgrey' : 'lightgrey';
    const tint = isDark ? 'plum' : 'purple';
    const inactive = isDark ? 'lightgrey' : 'grey';

    return (
        <Tab.Navigator
            initialRouteName='HomeStack'
            screenOptions={{
                tabBarStyle: [styles.tabBarBackground, { backgroundColor }],
                tabBarShowLabel: false,
                tabBarActiveTintColor: tint,
                tabBarInactiveTintColor: inactive,
                headerShown: false
            }}
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
                name='DetailsStack'
                component={DetailsStack}
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
