import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import SearchScreen from '../../screens/SearchScreen';
import Navigator from './Navigator';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            tabBarOptions={{
                activeTintColor: '#5856D6',
                labelStyle: {
                    marginBottom: Platform.OS === 'ios' ? 0 : 10,
                },
                style: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255, 0.5)',
                    borderWidth: 0,
                    elevation: 0,
                    height: Platform.OS === 'ios' ? 80 : 60,
                },
            }}>
            <Tab.Screen
                name="Navigator"
                component={Navigator}
                options={{
                    tabBarLabel: 'List',
                    tabBarIcon: ({color}) => (
                        <Icon name="list-outline" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({color}) => (
                        <Icon name="search-outline" color={color} size={25} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
