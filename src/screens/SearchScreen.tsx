import React from 'react';
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

const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {
    const {top} = useSafeAreaInsets();

    const {isFetching, simplePokemonList} = usePokemonSearch();

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
                        Results
                    </Text>
                }
                data={simplePokemonList}
                keyExtractor={pokemon => pokemon.id}
                renderItem={({item}) => <PokemonCard pokemon={item} />}
            />
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({});
