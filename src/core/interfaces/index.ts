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
    name: string,
    front_default: string,
    height: number,
    stat_value: { stat_value: number, name: string }[],
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


export interface IHomeDuckInitialState {
    loading: boolean,
    error: boolean,
    pokemons: IPokemonRequest | null,
    success: boolean,
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

}

export interface IPokemonScreenDuckInitialState {
    loading: boolean,
    error: boolean,
    pokemonData: IPokemon | null,
    success: boolean,
}