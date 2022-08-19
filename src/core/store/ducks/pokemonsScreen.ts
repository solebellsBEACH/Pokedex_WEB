import { IPokemon, IPokemonScreenDuckInitialState } from "../../interfaces";

export const Types = {
    GET_POKEMONS_SCREEN_REQUEST: 'GET_POKEMONS_SCREEN_REQUEST',
    GET_POKEMONS_SCREEN_SUCCESS: 'GET_POKEMONS_SCREEN_SUCCESS',
    GET_POKEMONS_SCREEN_FAIL: 'GET_POKEMONS_SCREEN_FAIL',
};

const INITIAL_STATE: IPokemonScreenDuckInitialState = {
    loading: false,
    error: false,
    pokemonData: null,
    success: false,
};

export default function PokemonScreen(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case Types.GET_POKEMONS_SCREEN_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case Types.GET_POKEMONS_SCREEN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                pokemonData: action.payload
            };
        case Types.GET_POKEMONS_SCREEN_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}

export const Creators = {
    getPokemonsScreenRequest: (payload: { id:string }) => ({
        type: Types.GET_POKEMONS_SCREEN_REQUEST,
        payload
    }),
    getPokemonsScreenSuccess: (payload: IPokemon | null) => ({
        type: Types.GET_POKEMONS_SCREEN_SUCCESS,
        payload
    }),
    getPokemonsScreenFail: () => ({
        type: Types.GET_POKEMONS_SCREEN_FAIL
    }),
};
