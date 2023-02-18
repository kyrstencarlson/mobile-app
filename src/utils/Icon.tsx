import React from 'react';
import { TextStyle, ViewProps, ViewStyle } from 'react-native';
import { Icon as NativeBaseIcon } from 'native-base';

// Import Icons Groups
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';
import colors, { Color } from '../styles/colors';

export type IconType = 'Entypo' | 'AntDesign' | 'MaterialIcons' | 'MaterialCommunityIcons' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'FontAwesome5' | 'Foundation' | 'Ionicons' | 'Octicons' | 'SimpleLineIcons' | 'Zocial' | 'Fontisto';


type IconProps = {
    name: string;
    type: IconType;
    size?: number;
    testID?: string;
    color?: Color;
    style?: ViewProps['style'] | TextStyle;
}

const Icon = (props: IconProps) => {

    const {
        name, size = 5, testID, color, style, type
    } = props;

    const iconTypes = {
        AntDesign,
        Entypo,
        EvilIcons,
        Feather,
        FontAwesome,
        FontAwesome5,
        Foundation,
        Ionicons,
        MaterialIcons,
        MaterialCommunityIcons,
        SimpleLineIcons,
        Octicons,
        Zocial,
        Fontisto
    };

    // Merge style from props with default style
    const iconStyle = Object.assign(
        {
            color: color ? colors[color] : colors.white
        },
            // Cast to generic object to allow for object assign
            style as {[key:string]: any}
    );

    return (
        <NativeBaseIcon
            testID={testID || `${type}-${name}`}
            style={iconStyle as ViewStyle}
            name={name}
            size={size}
            as={iconTypes[type]}
        />
    );
};

export { Icon };
