import { IPokemonRequest } from "../../interfaces";

export const Types = {
    HOME_POKEMONS_REQUEST: 'HOME_POKEMONS_REQUEST',
    HOME_POKEMONS_SUCCESS: 'HOME_POKEMONS_SUCCESS',
    HOME_POKEMONS_FAIL: 'HOME_POKEMONS_FAIL',
};

interface IInitialState {
    loading: boolean,
    error: boolean,
    pokemons: IPokemonRequest[] | null,
    success: boolean,
}

const INITIAL_STATE: IInitialState = {
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
};
