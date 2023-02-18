import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Switch, useColorMode } from 'native-base';
import { colorModeManager } from '../../App';
import Layout from '../components/Layout';
import { Text } from 'native-base';

const HomeScreen = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const onChange = () => {
        toggleColorMode();
        colorModeManager.set(isDark ? 'light' : 'dark');
    };

    return (
        <Layout style={styles.container}>
            <View style={styles.flex}>
                <Text style={styles.text}>Dark Mode</Text>
                <Switch
                    size='sm'
                    onToggle={onChange}
                    value={isDark}
                    thumbColor={isDark ? 'dimgrey' : 'purple'}
                    trackColor={{ true: 'lightgrey' }}
                />
            </View>

        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: '20%',
        alignItems: 'center'
    },
    flex: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 16
    }
});

export default HomeScreen;
