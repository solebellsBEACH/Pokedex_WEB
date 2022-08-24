import { IPokemon, IPokemonDuckInitialState } from "../../interfaces";

export const Types = {
    GET_POKEMONS_REQUEST: 'GET_POKEMONS_REQUEST',
    GET_POKEMONS_SUCCESS: 'GET_POKEMONS_SUCCESS',
    GET_POKEMONS_FAIL: 'GET_POKEMONS_FAIL',
    GET_POKEMON_TYPES_REQUEST: 'GET_POKEMON_TYPES_REQUEST',
    GET_POKEMON_TYPES_SUCCESS: 'GET_POKEMON_TYPES_SUCCESS',
    GET_POKEMON_TYPES_FAIL: 'GET_POKEMON_TYPES_FAIL',
    ADD_POKEMON_IN_CART_REQUEST: 'ADD_POKEMON_IN_CART_REQUEST',
    ADD_POKEMON_IN_CART_SUCCESS: 'ADD_POKEMON_IN_CART_SUCCESS',
    ADD_POKEMON_IN_CART_FAIL: 'ADD_POKEMON_IN_CART_FAIL',
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
    addPokemonInCartLoading: false,
    addPokemonInCartError: false,
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
        case Types.ADD_POKEMON_IN_CART_REQUEST:
            return {
                ...state,
                addPokemonInCartLoading: true,
                addPokemonInCartError: false
            };
        case Types.ADD_POKEMON_IN_CART_SUCCESS:
            return {
                ...state,
                addPokemonInCartLoading: false,
                addPokemonInCartError: false,
            };
        case Types.ADD_POKEMON_IN_CART_FAIL:
            return {
                ...state,
                addPokemonInCartLoading: false,
                addPokemonInCartError: true
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
    addPokemonInCartRequest: (payload: {
        _id: string
        name: string
        front_default: string
    }) => ({
        type: Types. ADD_POKEMON_IN_CART_REQUEST,
        payload
    }),
    addPokemonInCartSuccess: () => ({
        type: Types. ADD_POKEMON_IN_CART_SUCCESS,
    }),
    addPokemonInCartFail: () => ({
        type: Types. ADD_POKEMON_IN_CART_FAIL
    }),
};
