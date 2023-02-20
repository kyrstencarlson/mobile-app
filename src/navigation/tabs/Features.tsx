import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButton } from '@components/shared/HeaderButton';
import AnimatedHeader from '@screens/Player/AnimatedHeader';
import Player from '@screens/Player/Player';
import { useHeaderOpts } from '@utils/headerOpts';
import FeatureScreen from '@screens/Features';


export type FeatureStackParamsList = {
    Features: undefined;
    AnimatedHeader: undefined;
    Player: { trackIndex: number };
};

const Stack = createStackNavigator<FeatureStackParamsList>();

const FeatureStack = () => (

    <Stack.Navigator>
        <Stack.Screen
            options={{
                ...useHeaderOpts(),
                headerTransparent: true,
                headerTitle: ''
            }}
            name='Features'
            component={FeatureScreen}
        />
        <Stack.Screen
            options={{
                ...useHeaderOpts(),
                headerLeft: () => <HeaderButton color='white' />,
                headerTransparent: true,
                headerTitle: ''
            }}
            name='AnimatedHeader'
            component={AnimatedHeader}
        />
        <Stack.Screen
            options={{
                ...useHeaderOpts(),
                headerLeft: () => <HeaderButton />,
                headerTransparent: true,
                headerTitle: ''
            }}
            name='Player'
            component={Player}
        />
    </Stack.Navigator>
);

export default FeatureStack;
