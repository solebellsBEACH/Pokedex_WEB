import { IPossiblePokemonKeys } from "../interfaces";

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
        fire: { secondary: '#fdafaf', primary: '#ff6c6c' , name:'red'},
        grass: { secondary: '#8DF59F', primary: '#22AE39' , name:'green'},
        electric: { secondary: '#fff1aa', primary: '#f6df6f' , name:'green'},
        water: { secondary: '#aee5ff', primary: '#62cdff' , name:'blue'},
        ground: { secondary: '#fdcb99', primary: '#f2aa62' , name:'green'},
        rock: { secondary: '#d8d8b7', primary: '#d8d84c' , name:'green'},
        fairy: { secondary: '#f5b9ff', primary: '#e655ff' , name:'green'},
        poison: { secondary: '#8ed69d', primary: '#56d26f' , name:'green'},
        bug: { secondary: '#f5cd95', primary: '#f8b960' , name:'yellow'},
        dragon: { secondary: '#90aee7', primary: '#6794e7' , name:'green'},
        psychic: { secondary: '#eaeda1', primary: '#8d903c' , name:'green'},
        flying: { secondary: '#f8baba', primary: '#e9c0c0' , name:'gray'},
        fighting: { secondary: '#e0d4bc', primary: '#f7a603' , name:'gray'},
        normal: { secondary: '#DCDCDC', primary: '#666666' , name:'gray'}
    }

    return data[pokemonType]

}
export const returnId = (url: string) => {
    url = url.slice(34)
    url = url.replace('/', '')
    return parseInt(url)
}
export const returnPrice = (value:number | undefined) => {
    if(value==undefined) return 0;
    return value*1.8
}