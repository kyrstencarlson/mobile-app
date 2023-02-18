import React from 'react';
import { StyleSheet } from 'react-native';
import { Switch, useColorMode } from 'native-base';
import { colorModeManager } from '../../App';
import { Text } from 'native-base';
import { Card, Layout } from '../components/shared';
import { useGetColorMode } from '../utils/colorMode';

const HomeScreen = () => {

    const { toggleColorMode } = useColorMode();
    const isDark = useGetColorMode();

    const onChange = () => {
        toggleColorMode();
        colorModeManager.set(isDark ? 'light' : 'dark');
    };

    return (
        <Layout style={styles.container}>
            <Card style={styles.flex}>
                <Text style={styles.text}>Dark Mode</Text>
                <Switch
                    size='sm'
                    onToggle={onChange}
                    value={isDark}
                    offTrackColor={'black'}
                    thumbColor={isDark ? 'dimgrey' : 'white'}
                />
            </Card>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: '20%',
        alignItems: 'center'
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 16
    }
});

export default HomeScreen;
