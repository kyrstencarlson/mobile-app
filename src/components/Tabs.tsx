import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { TabView, SceneMap, TabBar, SceneRendererProps } from 'react-native-tab-view';
import { Text } from 'native-base';
import { deviceWidth } from '../utils/dimensions';
import ThemeConfig from '../styles/theme';

export interface TabProps {
    tabs: { title: string, key: string, component: JSX.Element }[];
    tabWidth?: ViewStyle['width'];
    backgroundColor?: ViewStyle['backgroundColor'];
}

const Tabs = (props: TabProps) => {

    const {
        tabs,
        tabWidth = '100%',
        backgroundColor = 'transparent'
    } = props;
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState(tabs);

    const Routes = (route: string) => {
        const routeIndex = tabs.findIndex(tab => tab.key === route);
        // hacky, but how to get the tab length to be dynamic
        const display = index === routeIndex ? 'flex' : 'none';

        return (
            <View style={[styles.container, { display }]}>
                {tabs.find(tab => tab.key === route)?.component}
            </View>
        );
    };

    const routeMap = tabs.reduce((acc, tab) => {
        acc[tab.key] = () => Routes(tab.key);

        return acc;
    }, {} as { [key: string]: () => JSX.Element });

    const renderScene = SceneMap(routeMap);

    const tabHeaderStyle = ({
        backgroundColor,
        height: 40,
        width: tabWidth
    });

    const renderTabBar = (tabBarProps: SceneRendererProps) => (
        <TabBar
            {...tabBarProps}
            getTestID={({ route }) => `${route.key}-tab`}
            navigationState={{
                index,
                routes
            }}
            indicatorStyle={{
                backgroundColor: ThemeConfig.colors.primary[500]
            }}
            pressOpacity={0.8}
            style={tabHeaderStyle}
            onTabPress={({ route }) => setIndex(tabs.findIndex(tab => tab.key === route.key))}
            renderLabel={({ route }) => (
                <View style={styles.tabLabel}>
                    <Text fontSize='md' color='white'>
                        {route.title}
                    </Text>
                </View>
            )}
        />
    );

    return (
        <TabView
            navigationState={{
                index,
                routes
            }}
            renderTabBar={renderTabBar}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: deviceWidth }}
            sceneContainerStyle={styles.sceneContainer}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sceneContainer: {
        height: '100%'
    },
    tabLabel: {
        fontSize: 14,
        fontWeight: '700',
        width: '100%'
    }
});

export { Tabs };
