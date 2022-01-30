import React from 'react';
import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PokemonCard from '../components/PokemonCard';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';

import {styles} from '../theme/appTheme';

const HomeScreen = () => {
    const {top} = useSafeAreaInsets();

    const {isLoading, simplePokemonList, loadPokemons} = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBg}
            />

            <View
                style={{
                    alignItems: 'center',
                }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={
                        <Text
                            style={{
                                ...styles.title,
                                ...styles.globalMargin,
                                top: top + 20,
                                marginBottom: top + 20,
                                paddingBottom: 10,
                            }}>
                            Pokedex
                        </Text>
                    }
                    data={simplePokemonList}
                    keyExtractor={pokemon => pokemon.id}
                    renderItem={({item}) => <PokemonCard pokemon={item} />}
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={
                        <ActivityIndicator
                            style={{height: 100}}
                            size={30}
                            color="gray"
                        />
                    }
                />
            </View>
        </>
    );
};

export default HomeScreen;
