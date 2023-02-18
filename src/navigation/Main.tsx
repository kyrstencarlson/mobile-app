/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import { deviceHeight } from '../utils/dimensions';
import DetailsScreen from '../screens/Details';
import { useColorMode } from 'native-base';
import { useHeaderOpts } from '../utils/headerOpts';

const Tab = createBottomTabNavigator();

const MainStack = () => {

    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const backgroundColor = isDark ? 'dimgrey' : 'lightgrey';
    const tint = isDark ? 'plum' : 'purple';
    const inactive = isDark ? 'lightgrey' : 'grey';

    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarStyle: [styles.tabBarBackground, { backgroundColor }],
                tabBarShowLabel: false,
                tabBarActiveTintColor: tint,
                tabBarInactiveTintColor: inactive
                // tabBarBackground: () => (
                //     <BlurView blurType='light' blurAmount={10} style={StyleSheet.absoluteFill} />
                // )
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    ...useHeaderOpts(),
                    headerTransparent: true,
                    headerTitle: '',
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
                    ...useHeaderOpts(),
                    headerTransparent: true,
                    headerTitle: '',
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
                    ...useHeaderOpts(),
                    headerTransparent: true,
                    headerTitle: '',
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
