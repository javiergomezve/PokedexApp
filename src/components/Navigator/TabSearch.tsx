import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParams} from './TabHome';
import SearchScreen from '../../screens/SearchScreen';
import PokemonScreen from '../../screens/PokemonScreen';

const Tab = createStackNavigator<RootStackParams>();

const TabSearch = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}>
            <Tab.Screen name="SearchScreen" component={SearchScreen} />
            <Tab.Screen name="PokemonScreen" component={PokemonScreen} />
        </Tab.Navigator>
    );
};

export default TabSearch;
