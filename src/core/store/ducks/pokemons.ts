import { IPokemon, IPokemonDuckInitialState } from "../../interfaces";

export const Types = {
    GET_POKEMONS_REQUEST: 'GET_POKEMONS_REQUEST',
    GET_POKEMONS_SUCCESS: 'GET_POKEMONS_SUCCESS',
    GET_POKEMONS_FAIL: 'GET_POKEMONS_FAIL',
    GET_POKEMON_TYPES_REQUEST: 'GET_POKEMON_TYPES_REQUEST',
    GET_POKEMON_TYPES_SUCCESS: 'GET_POKEMON_TYPES_SUCCESS',
    GET_POKEMON_TYPES_FAIL: 'GET_POKEMON_TYPES_FAIL',
};

const INITIAL_STATE: IPokemonDuckInitialState = {
    loading: false,
    error: false,
    pokemonData: null,
    success: false,
    loadingPokemonTypes: false,
    errorPokemonTypes: false,
    pokemonTypes: null,
    successPokemonTypes: false,
};

export default function Home(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case Types.GET_POKEMONS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case Types.GET_POKEMONS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                pokemonData: action.payload
            };
        case Types.GET_POKEMONS_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        case Types.GET_POKEMON_TYPES_REQUEST:
            return {
                ...state,
                loadingPokemonTypes: true,
                errorPokemonTypes: false
            };
        case Types.GET_POKEMON_TYPES_SUCCESS:
            return {
                ...state,
                loadingPokemonTypes: false,
                errorPokemonTypes: false,
                pokemonTypes: action.payload
            };
        case Types.GET_POKEMON_TYPES_FAIL:
            return {
                ...state,
                loadingPokemonTypes: false,
                errorPokemonTypes: true
            };
        default:
            return state;
    }
}

export const Creators = {
    getPokemonsRequest: (payload: { id: number }) => ({
        type: Types.GET_POKEMONS_REQUEST,
        payload
    }),
    getPokemonsSuccess: (payload: IPokemon | null) => ({
        type: Types.GET_POKEMONS_SUCCESS,
        payload
    }),
    getPokemonsFail: () => ({
        type: Types.GET_POKEMONS_FAIL
    }),
    getPokemonTypesRequest: () => ({
        type: Types.GET_POKEMON_TYPES_REQUEST,
    }),
    getPokemonTypesSuccess: (payload: {
        count: 20,
        results: { name: string, url: string }[]
    } | null) => ({
        type: Types.GET_POKEMON_TYPES_SUCCESS,
        payload
    }),
    getPokemonTypesFail: () => ({
        type: Types.GET_POKEMON_TYPES_FAIL
    }),
};
