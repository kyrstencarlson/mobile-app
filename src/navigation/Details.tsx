import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../screens/Details';
import { useHeaderOpts } from '../utils/headerOpts';
import AnimatedHeader from '../components/animatedHeader/AnimatedHeader';
import { HeaderButton } from '../components/shared/HeaderButton';

export type DetailsStackParamsList = {
    Details: undefined;
    AnimatedHeader: undefined;
};

const Stack = createStackNavigator<DetailsStackParamsList>();

const DetailsStack = () => (

    <Stack.Navigator>
        <Stack.Screen
            options={{
                ...useHeaderOpts(),
                headerTransparent: true,
                headerTitle: ''
            }}
            name='Details'
            component={Details}
        />
        <Stack.Screen
            options={{
                ...useHeaderOpts(),
                headerLeft: () => <HeaderButton />,
                headerTransparent: true,
                headerTitle: ''
            }}
            name='AnimatedHeader'
            component={AnimatedHeader}
        />
    </Stack.Navigator>
);

export default DetailsStack;
