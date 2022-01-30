import {useEffect, useState} from 'react';

import {pokemonApi} from '../api/pokemonApi';

export const usePokemon = (id: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);

    const loadPokemon = async () => {
        setIsLoading(true);

        const response = await pokemonApi.get<PokemonFull>(
            `https://pokeapi.co/api/v2/pokemon/${id}`,
        );

        setPokemon(response.data);
        setIsLoading(false);
    };

    useEffect(() => {
        loadPokemon();
    }, []);

    return {
        isLoading,
        pokemon,
    };
};
