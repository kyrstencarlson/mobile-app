import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/Main';

const App = () => (
    <NavigationContainer>
        <MainStack />
    </NavigationContainer>
);

export default App;
