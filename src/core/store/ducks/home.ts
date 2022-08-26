import { insertToken } from "../../hooks";
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
    CREATE_USER_REQUEST: 'CREATE_USER_REQUEST',
    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAIL: 'CREATE_USER_FAIL',
    GET_USER_REQUEST: 'GET_USER_REQUEST',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_FAIL: 'GET_USER_FAIL',
    GET_USER_CART_REQUEST: 'GET_USER_CART_REQUEST',
    GET_USER_CART_SUCCESS: 'GET_USER_CART_SUCCESS',
    GET_USER_CART_FAIL: 'GET_USER_CART_FAIL',
};



const INITIAL_STATE: IHomeDuckInitialState = {
    loading: false,
    error: false,
    pokemons: null,
    success: false,
    userLoginLoading: false,
    userLoginError: false,
    userLoginData: null,
    createUserLoading: false,
    createUserError: false,
    createUserData: null,
    userLoading: false,
    userError: false,
    userData: null,
    userCartLoading: false,
    userCartError: false,
    userCartData: null
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
            insertToken(action.payload.token)
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
        case Types.GET_USER_REQUEST:
            return {
                ...state,
                userLoading: true,
                userError: false
            };
        case Types.GET_USER_SUCCESS:
            return {
                ...state,
                userLoading: false,
                userError: false,
                userData: action.payload

            };
        case Types.GET_USER_FAIL:
            return {
                ...state,
                userLoading: false,
                userError: true,
                userData: null
            };
        case Types.GET_USER_CART_REQUEST:
            return {
                ...state,
                userLoading: true,
                userError: false
            };
        case Types.GET_USER_CART_SUCCESS:
            return {
                ...state,
                userLoading: false,
                userError: false,
                userData: action.payload

            };
        case Types.GET_USER_CART_FAIL:
            return {
                ...state,
                userLoading: false,
                userError: true,
                userData: null
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
    createUserRequest: (payload: { name: string, email: string, password: string }) => ({
        type: Types.CREATE_USER_REQUEST,
        payload
    }),
    createUserSuccess: (payload: {
        success: boolean,
        message: string,
        token: string
    }) => ({
        type: Types.CREATE_USER_SUCCESS,
        payload
    }),
    createUserFail: (payload: {
        success: boolean,
        message: string,
    }) => ({
        type: Types.CREATE_USER_FAIL
    }),
    getUserRequest: () => ({
        type: Types.GET_USER_REQUEST,
    }),
    getUserSuccess: (payload: {
        success: boolean,
        message: string,
        token: string
    }) => ({
        type: Types.GET_USER_SUCCESS,
        payload
    }),
    getUserFail: (payload: {
        success: boolean,
        message: string,

    }) => ({
        type: Types.GET_USER_FAIL
    }),
    getUserCartRequest: () => ({
        type: Types.GET_USER_CART_REQUEST,
    }),
    getUserCartSuccess: (payload: {
        success: boolean,
        message: string,
        data:{ _id: string, name: string, front_default: string }[]
    }) => ({
        type: Types.GET_USER_CART_SUCCESS,
        payload
    }),
    getUserCartFail: (payload: {
        success: boolean,
        message: string,

    }) => ({
        type: Types.GET_USER_CART_FAIL
    }),
};
