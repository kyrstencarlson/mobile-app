import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';
import Layout from '../components/Layout';

const HomeScreen = () => (
    <Layout style={styles.container}>
        <Text>Home!</Text>
    </Layout>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeScreen;
