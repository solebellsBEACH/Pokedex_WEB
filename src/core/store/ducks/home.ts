import { IHomeDuckInitialState, IPokemonRequest } from "../../interfaces";

export const Types = {
    HOME_POKEMONS_REQUEST: 'HOME_POKEMONS_REQUEST',
    HOME_POKEMONS_SUCCESS: 'HOME_POKEMONS_SUCCESS',
    HOME_POKEMONS_FAIL: 'HOME_POKEMONS_FAIL',
    HOME_POKEMONS_FOR_TYPE_REQUEST: 'HOME_POKEMONS_FOR_TYPE_REQUEST',
    HOME_POKEMONS_FOR_TYPE_SUCCESS: 'HOME_POKEMONS_FOR_TYPE_SUCCESS',
    HOME_POKEMONS_FOR_TYPE_FAIL: 'HOME_POKEMONS_FOR_TYPE_FAIL',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL',
};



const INITIAL_STATE: IHomeDuckInitialState = {
    loading: false,
    error: false,
    pokemons: null,
    success: false,
    userLoginLoading: false,
    userLoginError: false,
    userLoginData: null
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
                pokemons: action.payload

            };
        case Types.HOME_POKEMONS_FOR_TYPE_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        case Types.LOGIN_REQUEST:
            return {
                ...state,
                userLoginLoading: true,
                userLoginError: false
            };
        case Types.LOGIN_SUCCESS:
            return {
                ...state,
                userLoginLoading: false,
                userLoginError: false,
                userLoginData: action.payload

            };
        case Types.LOGIN_FAIL:
            return {
                ...state,
                userLoginLoading: false,
                userLoginError: true,
                userLoginData: action.payload
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
    HomePokemonsForTypeRequest: (payload: { limit: number, page: number, pokemonType: string }) => ({
        type: Types.HOME_POKEMONS_FOR_TYPE_REQUEST,
        payload
    }),
    HomePokemonsForTypeSuccess: (payload: IPokemonRequest[] | null) => ({
        type: Types.HOME_POKEMONS_FOR_TYPE_SUCCESS,
        payload
    }),
    HomePokemonsForTypeFail: () => ({
        type: Types.HOME_POKEMONS_FOR_TYPE_FAIL
    }),
    loginRequest: (payload: { email: string, password: string }) => ({
        type: Types.LOGIN_REQUEST,
        payload
    }),
    loginSuccess: (payload: {
        success: boolean,
        message: string,
        token: string
    }) => ({
        type: Types.LOGIN_SUCCESS,
        payload
    }),
    loginFail: (payload: {
        success: boolean,
        message: string,
    }) => ({
        type: Types.LOGIN_FAIL
    }),
};
