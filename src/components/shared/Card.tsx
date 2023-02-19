import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { deviceWidth } from '../../utils/dimensions';
import { useGetColorMode } from '../../utils/colorMode';
import ThemeConfig from '../../styles/theme';

interface CardProps {
    children: React.ReactNode;
    onPress?: () => void;
    style?: ViewStyle;
}

const Card = (props: CardProps) => {

    const { children, style = {}, onPress } = props;

    const isDark = useGetColorMode();
    const colors = ThemeConfig.colors;

    const backgroundColor = isDark ? colors.gray[600] : colors.gray[300];

    return (
        <Pressable style={[styles.card, style, { backgroundColor }]} onPress={onPress}>
            {children}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        width: deviceWidth * 0.9,
        padding: 20,
        borderRadius: 10,
        minHeight: 75,
        justifyContent: 'center'
    }
});

export { Card };
