import { ReactNode } from "react";

export interface INavigationProps<T = never> {
    navigate: (screen: string, data?: T) => void;
    goBack: () => void;
    screen: string;
}



export interface IPokemonType {
    name: string;
}
export interface IPokemonTypeRequest {
    count: number,
    results: IPokemonType[];
}

export interface IPokemon {
    _id: string;
    name: string,
    front_default: string,
    height: number,
    stat_value: { stats_value: number, name: string }[],
    abilities: { value: number, name: string }[],
    type: 'fire' |
    'grass' |
    'electric' |
    'water' |
    'ground' |
    'rock' |
    'fairy' |
    'poison' |
    'bug' |
    'dragon' |
    'psychic' |
    'flying' |
    'fighting' |
    'normal'
}
export interface IPokemonRequest {
    success: boolean,
    status: number
    data: IPokemon[];
}

//  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - - //
export interface IRequestContextProps {
}

export interface IRequestContextProviderProps {
    children: ReactNode;
    isPost?: number;
}

export type IPossiblePokemonKeys = {
    pokemonType: 'fire' |
    'grass' |
    'electric' |
    'water' |
    'ground' |
    'rock' |
    'fairy' |
    'poison' |
    'bug' |
    'dragon' |
    'psychic' |
    'flying' |
    'fighting' |
    'normal'
}

export interface IUser {
    _id: string;
    name: string;
    email: string;
    cart: { _id: string, name: string, front_default: string }[]
}

export interface IHomeDuckInitialState {
    loading: boolean,
    error: boolean,
    pokemons: IPokemonRequest | null,
    success: boolean,
    userLoginLoading: boolean,
    userLoginError: boolean,
    userLoginData: {
        success: boolean,
        message: string,
        token: string
    } | null,
    createUserLoading: boolean,
    createUserError: boolean,
    createUserData: {
        success: boolean,
        message: string,
        token: string
    } | null,
    userLoading: boolean,
    userError: boolean,
    userData: {
        success: boolean,
        message: string,
        data: IUser
    } | null,
    userCartLoading: boolean,
    userCartError: boolean,
    userCartData: {
        success: boolean,
        message: string,
        data: { _id: string, name: string, front_default: string, height: number, type: "fire" | "grass" | "electric" | "water" | "ground" | "rock" | "fairy" | "poison" | "bug" | "dragon" | "psychic" | "flying" | "fighting" | "normal" }[]
    } | null,
}
export interface IPokemonDuckInitialState {
    loading: boolean,
    error: boolean,
    pokemonData: IPokemon | null,
    success: boolean,
    loadingPokemonTypes: boolean,
    errorPokemonTypes: boolean,
    pokemonTypes: { success: boolean, status: number, data: IPokemonType[] } | null,
    successPokemonTypes: boolean,
    addPokemonInCartLoading: boolean,
    addPokemonInCartError: boolean,

}

export interface IPokemonScreenDuckInitialState {
    loading: boolean,
    error: boolean,
    pokemonData: { success: boolean, status: number, data: IPokemon[] } | null,
    success: boolean,
}