import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import {RootStackParams} from '../components/Navigator/TabHome';
import {FadeInImage} from '../components/FadeInImage';
import {usePokemon} from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({navigation, route}: Props) => {
    const {simplePokemon, color} = route.params;
    const {id, name, picture} = simplePokemon;

    const {top} = useSafeAreaInsets();

    const {isLoading, pokemon} = usePokemon(id);

    return (
        <View style={{flex: 1}}>
            <View style={{...styles.headerContainer, backgroundColor: color}}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{...styles.backButton, top: top + 10}}
                    onPress={() => navigation.pop()}>
                    <Icon name="arrow-back-outline" color="white" size={35} />
                </TouchableOpacity>

                <Text style={{...styles.pokemonName, top: top + 50}}>
                    {name + '\n'}#{id}
                </Text>

                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokebola}
                />

                <FadeInImage uri={picture} style={styles.pokemonImage} />
            </View>

            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator color={color} size={70} />
                </View>
            ) : (
                <PokemonDetails pokemon={pokemon} />
            )}
        </View>
    );
};

export default PokemonScreen;

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokebola: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
