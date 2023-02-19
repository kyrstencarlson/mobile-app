import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screens/Home';
import { useHeaderOpts } from '@utils/headerOpts';

export type HomeStackParamsList = {
    Home: undefined;
};

const Stack = createStackNavigator<HomeStackParamsList>();

const HomeStack = () => (

    <Stack.Navigator>
        <Stack.Screen
            options={{
                ...useHeaderOpts(),
                headerTransparent: true,
                headerTitle: ''
            }}
            name='Home'
            component={Home}
        />
    </Stack.Navigator>
);

export default HomeStack;
