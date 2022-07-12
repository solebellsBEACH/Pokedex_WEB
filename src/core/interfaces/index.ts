import { ReactNode } from "react";

export interface INavigationProps<T = never> {
    navigate: (screen: string, data?: T) => void;
    goBack: () => void;
    screen: string;
}



export interface IPokemonType {
    name: string;
    url: string;
}
export interface IPokemonTypeRequest {
    count: number,
    results: IPokemonType[];
}

export interface IPokemon {
    stats: {
        base_stat: number,
        stat: {
            name: string,
        }
    }[],
    forms: [
        {
            name: string,

        }
    ],
    sprites: {
        other: {
            dream_world: {
                front_default: string
            }
        }
    }
    types: [
        {
            type: {
                name: string
            }
        }
    ],
    species: { name: string },
    height: number,
    abilities: { ability: { name: string } }[],
}
export interface IPokemonPreRequest {
    name: string;
    url: string;
}
export interface IPokemonRequest {
    count: number,
    next: string | null,
    previous: string | null,
    results: IPokemonPreRequest[];
}

//  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - - //
export interface IRequestContextProps {
}

export interface IRequestContextProviderProps {
    children: ReactNode;
    isPost?: number;
}

export interface IPossiblePokemonKeys {
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
