import { IPossiblePokemonKeys } from "../interfaces";

export function capitalizeFirstLetter(string: string | null | undefined) {
    if (string == null || string == undefined) {
        return ''
    }
    return string.charAt(0).toUpperCase() + string?.slice(1);
}

export function useAddZeroInNumber(number: number): string {
    if (number < 0) {
        return number + ''
    }
    if (number < 10) {
        return "00" + number
    }
    if (number < 100) {
        return "0" + number
    }
    return number + ''
}


export function pokemonColors({ pokemonType }: IPossiblePokemonKeys) {
    const data = {
        fire: { secondary: '#fdafaf', primary: '#ff6c6c', name: 'red' },
        grass: { secondary: '#8DF59F', primary: '#22AE39', name: 'green' },
        electric: { secondary: '#fff1aa', primary: '#f6df6f', name: 'green' },
        ice: { secondary: '#fff1aa', primary: '#f6df6f', name: 'green' },
        water: { secondary: '#aee5ff', primary: '#62cdff', name: 'blue' },
        ground: { secondary: '#fdcb99', primary: '#f2aa62', name: 'green' },
        rock: { secondary: '#d8d8b7', primary: '#d8d84c', name: 'green' },
        fairy: { secondary: '#f5b9ff', primary: '#e655ff', name: 'green' },
        poison: { secondary: '#8ed69d', primary: '#56d26f', name: 'green' },
        bug: { secondary: '#f5cd95', primary: '#f8b960', name: 'yellow' },
        dragon: { secondary: '#90aee7', primary: '#6794e7', name: 'green' },
        psychic: { secondary: '#eaeda1', primary: '#8d903c', name: 'green' },
        flying: { secondary: '#f8baba', primary: '#e9c0c0', name: 'gray' },
        fighting: { secondary: '#e0d4bc', primary: '#f7a603', name: 'gray' },
        normal: { secondary: '#DCDCDC', primary: '#666666', name: 'gray' }
    }
    if (data[pokemonType] == undefined) {
        return { secondary: '#f5b9ff', primary: '#e655ff', name: 'green' }
    }
    return data[pokemonType]

}
export const returnId = (url: string) => {
    url = url.slice(34)
    url = url.replace('/', '')
    return parseInt(url)
}
export const returnPrice = (value: number | undefined | null) => {
    if (value == undefined || value == null) return 0;
    return value * 1.8
}

export function checkDevice(window: Window & typeof globalThis) {
    const { navigator } = window
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true; // está utilizando celular
    }
    else {
        return false; // não é celular
    }
}

export function insertToken(token: string) {
    console.log(token)
    localStorage.setItem('@pokedex-authBearerToken', token)
}
export function getToken(): string {
    if (typeof window == 'undefined') return 'not Valid'
    const token = localStorage.getItem('@pokedex-authBearerToken')
    if (token !== null) return token
    return 'not Valid'
}