import { IHomeDuckInitialState, IPokemonPreRequest, IPokemonRequest } from "../../interfaces";

export const Types = {
    HOME_POKEMONS_REQUEST: 'HOME_POKEMONS_REQUEST',
    HOME_POKEMONS_SUCCESS: 'HOME_POKEMONS_SUCCESS',
    HOME_POKEMONS_FAIL: 'HOME_POKEMONS_FAIL',
    HOME_POKEMONS_FOR_TYPE_REQUEST: 'HOME_POKEMONS_FOR_TYPE_REQUEST',
    HOME_POKEMONS_FOR_TYPE_SUCCESS: 'HOME_POKEMONS_FOR_TYPE_SUCCESS',
    HOME_POKEMONS_FOR_TYPE_FAIL: 'HOME_POKEMONS_FOR_TYPE_FAIL',
};



const INITIAL_STATE: IHomeDuckInitialState = {
    loading: false,
    error: false,
    pokemons: null,
    success: false,
};

export default function Home(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case Types.HOME_POKEMONS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case Types.HOME_POKEMONS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                pokemons: action.payload
            };
        case Types.HOME_POKEMONS_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        case Types.HOME_POKEMONS_FOR_TYPE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case Types.HOME_POKEMONS_FOR_TYPE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                pokemons: {
                    count: 0,
                    next: null,
                    previous: null,
                    results: action.payload
                }


            };
        case Types.HOME_POKEMONS_FOR_TYPE_FAIL:
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
    HomePokemonsRequest: (payload: { offset: number, limit: number }) => ({
        type: Types.HOME_POKEMONS_REQUEST,
        payload
    }),
    HomePokemonsSuccess: (payload: IPokemonRequest[] | null) => ({
        type: Types.HOME_POKEMONS_SUCCESS,
        payload
    }),
    HomePokemonsFail: () => ({
        type: Types.HOME_POKEMONS_FAIL
    }),
    HomePokemonsForTypeRequest: (payload: { offset: number, limit: number, pokemonType: string }) => ({
        type: Types.HOME_POKEMONS_FOR_TYPE_REQUEST,
        payload
    }),
    HomePokemonsForTypeSuccess: (payload: IPokemonPreRequest[] | null) => ({
        type: Types.HOME_POKEMONS_FOR_TYPE_SUCCESS,
        payload
    }),
    HomePokemonsForTypeFail: () => ({
        type: Types.HOME_POKEMONS_FOR_TYPE_FAIL
    }),
};
