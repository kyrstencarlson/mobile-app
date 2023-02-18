import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { deviceWidth } from '../../utils/dimensions';
import { useGetColorMode } from '../../utils/colorMode';

interface CardProps {
    children: React.ReactNode;
    onPress?: () => void;
    style?: ViewStyle;
}

const Card = (props: CardProps) => {

    const { children, style = {}, onPress } = props;

    const isDark = useGetColorMode();

    const backgroundColor = isDark ? 'dimgrey' : 'lightgrey';

    const onPressHandler = () => {
        console.log('Card pressed');
        onPress?.();
    };

    return (
        <Pressable style={[styles.card, style, { backgroundColor }]} onPress={onPressHandler}>
            {children}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        width: deviceWidth * 0.9,
        padding: 20,
        borderRadius: 10
    }
});

export { Card };
