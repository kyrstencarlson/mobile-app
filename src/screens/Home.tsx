import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { Layout } from '../components/shared';
import { typography } from '../styles';

const HomeScreen = () => (
    <Layout style={styles.container}>
        <Text style={{
            fontSize: typography.superxl,
            lineHeight: 100
        }}>Welcome</Text>


        <Text style={{
            textAlign: 'center',
            paddingHorizontal: 30
        }}>
            Click around and check out features and components I've built!
        </Text>
    </Layout>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 200
    }
});

export default HomeScreen;
