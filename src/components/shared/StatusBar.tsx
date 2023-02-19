import { StatusBar } from 'native-base';
import React from 'react';
import { useGetColorMode } from '@utils/colorMode';

const MyStatusBar = () => {

    const isDark = useGetColorMode();

    return (
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
    );
};

export default MyStatusBar;
