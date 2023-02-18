import { useColorMode } from 'native-base';

export const useHeaderOpts = () => {

    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const backgroundColor = isDark ? 'dimgrey' : 'white';
    const color = isDark ? 'white' : 'black';

    return ({
        headerStyle: {
            shadowColor: 'transparent',
            backgroundColor,
            elevation: 0
        },
        headerTitleStyle: {
            color
        }
    });
};
