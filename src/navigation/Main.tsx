/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import { deviceHeight } from '../utils/dimensions';
import DetailsScreen from '../screens/Details';

const Tab = createBottomTabNavigator();

const MainStack = () => (
    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            tabBarStyle: styles.tabBarBackground,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'grey'
            // tabBarBackground: () => (
            //     <BlurView blurType='light' blurAmount={10} style={StyleSheet.absoluteFill} />
            // )
        }}
    >
        <Tab.Screen
            name='Home'
            component={HomeScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons
                        name='home'
                        color={color}
                        size={30}
                    />
                )
            }}
        />
        <Tab.Screen
            name='Details'
            component={DetailsScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
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
                tabBarIcon: ({ color, size }) => (
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
        backgroundColor: 'lightgrey',
        paddingTop: 20
    }
});

export default MainStack;
