import React, {useEffect, useState} from 'react';
import {
    View,
    Platform,
    StyleSheet,
    Text,
    FlatList,
    Dimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles as globalStyles} from '../theme/appTheme';
import SearchInput from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSeach';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {
    const {top} = useSafeAreaInsets();

    const {isFetching, simplePokemonList} = usePokemonSearch();

    const [term, setTerm] = useState('');

    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

    useEffect(() => {
        if (term?.length === 0) {
            return setPokemonFiltered([]);
        }

        if (isNaN(Number(term))) {
            setPokemonFiltered(
                simplePokemonList.filter(poke => {
                    return poke.name
                        .toLowerCase()
                        .includes(term?.toLowerCase());
                }),
            );
        } else {
            const pokemonById = simplePokemonList.find(poke => {
                return poke.id === term;
            });
            setPokemonFiltered(pokemonById ? [pokemonById] : []);
        }
    }, [term]);

    if (isFetching) {
        return <Loading />;
    }

    return (
        <View
            style={{
                flex: 1,
                marginHorizontal: 20,
            }}>
            <SearchInput
                onDebounce={value => setTerm(value)}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: Platform.OS === 'ios' ? top : top + 20,
                }}
            />

            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={
                    <Text
                        style={{
                            ...globalStyles.title,
                            ...globalStyles.globalMargin,
                            paddingBottom: 10,
                            marginTop:
                                Platform.OS === 'ios' ? top + 60 : top + 80,
                        }}>
                        {term}
                    </Text>
                }
                data={pokemonFiltered}
                keyExtractor={pokemon => pokemon.id}
                renderItem={({item}) => <PokemonCard pokemon={item} />}
            />
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({});
