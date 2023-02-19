import React from 'react';
import { Pressable, TextStyle, ViewProps } from 'react-native';
import { Icon } from '@utils/Icon';
import { useNavigation } from '@react-navigation/native';


export type Props = {
    style?: ViewProps['style'] | TextStyle;
}

const HeaderButton = (props: Props) => {

    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.goBack()} style={props.style}>
            <Icon
                type='AntDesign'
                name='arrowleft'
                color='white'
                size={25}
                style={{ marginLeft: 10 }}
            />
        </Pressable>
    );
};
export { HeaderButton };
