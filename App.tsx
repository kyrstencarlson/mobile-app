import * as React from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import MainStack from './src/navigation/Main';
import { NativeBaseProvider, ColorMode } from 'native-base';
import ThemeConfig from './src/styles/theme';
import type { StorageManager } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyStatusBar from './src/components/shared/StatusBar';

export const navRef = React.createRef<NavigationContainerRef<any>>();

export const colorModeManager: StorageManager = {
    get: async () => {
        try {
            const val = await AsyncStorage.getItem('@my-app-color-mode');

            return val === 'dark' ? 'dark' : 'light';
        }
        catch (e) {
            return 'light';
        }
    },
    set: async (value: ColorMode) => {
        try {
            await AsyncStorage.setItem('@my-app-color-mode', value);
        }
        catch (e) {
            console.log('error setting color mode: ', e);
        }
    }
};

const App = () => (
    <NativeBaseProvider theme={ThemeConfig} colorModeManager={colorModeManager}>
        <NavigationContainer ref={navRef}>
            <MyStatusBar />
            <MainStack />
        </NavigationContainer>
    </NativeBaseProvider>
);

export default App;
