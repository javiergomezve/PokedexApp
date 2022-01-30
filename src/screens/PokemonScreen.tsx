import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParams} from '../components/Navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({navigation, route}: Props) => {
    const {simplePokemon, color} = route.params;

    return (
        <View>
            <Text style={{color}}>{simplePokemon.name}</Text>
        </View>
    );
};

export default PokemonScreen;
