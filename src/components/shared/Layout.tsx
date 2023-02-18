import { useColorMode } from 'native-base';
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface Props {
    children: React.ReactNode;
    style?: ViewStyle;
}

const Layout = ({ children, style = {} }: Props) => {

    const { colorMode } = useColorMode();

    const backgroundColor = colorMode === 'dark' ? 'black' : 'transparent';

    return (
        <View style={[styles.container, style, { backgroundColor }]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    }
});

export { Layout };
