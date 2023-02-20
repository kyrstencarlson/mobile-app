import React from 'react';
import { Pressable, TextStyle, ViewProps } from 'react-native';
import { Icon } from '@utils/Icon';
import { useNavigation } from '@react-navigation/native';
import { useGetColorMode } from '@utils/colorMode';


export type Props = {
    style?: ViewProps['style'] | TextStyle;
    color?: string;
}

const HeaderButton = (props: Props) => {

    const navigation = useNavigation();
    const isDark = useGetColorMode();

    return (
        <Pressable onPress={() => navigation.goBack()} style={props.style}>
            <Icon
                type='AntDesign'
                name='arrowleft'
                color={props.color ?? isDark ? 'white' : 'black'}
                size={25}
                style={{ marginLeft: 10 }}
            />
        </Pressable>
    );
};
export { HeaderButton };
