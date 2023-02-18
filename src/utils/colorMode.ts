import { useColorMode } from 'native-base';

export const useGetColorMode = () => {
    const { colorMode } = useColorMode();

    const isDark = colorMode === 'dark';

    return isDark;
};
