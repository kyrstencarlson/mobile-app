import React from 'react';
import { Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { Card, Layout } from '../components/shared';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FeatureStackParamsList } from '../navigation/tabs/Features';

const FeatureScreen = () => {

    const navigation = useNavigation<StackNavigationProp<FeatureStackParamsList>>();

    return (
        <Layout style={styles.container}>
            <View style={{ paddingVertical: '20%' }}>
                <Card onPress={() => navigation.navigate('AnimatedHeader')}>
                    <Text>Track Player with Animated Scroll Header</Text>
                </Card>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
});

export default FeatureScreen;
