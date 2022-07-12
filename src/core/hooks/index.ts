export function useCapitalizeFirstLetter(string: string) {
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


export function usePokemonColors({ pokemonType }: IPossiblePokemonKeys) {
    const data = {
        fire: { secondary: '#fdafaf', primary: '#ff6c6c' },
        grass: { secondary: '#9efba5', primary: '#88ff90' },
        electric: { secondary: '#fff1aa', primary: '#f6df6f' },
        water: { secondary: '#aee5ff', primary: '#62cdff' },
        ground: { secondary: '#fdcb99', primary: '#f2aa62' },
        rock: { secondary: '#d8d8b7', primary: '#d8d84c' },
        fairy: { secondary: '#f5b9ff', primary: '#e655ff' },
        poison: { secondary: '#8ed69d', primary: '#56d26f' },
        bug: { secondary: '#f5cd95', primary: '#f8b960' },
        dragon: { secondary: '#90aee7', primary: '#6794e7' },
        psychic: { secondary: '#eaeda1', primary: '#8d903c' },
        flying: { secondary: '#f8baba', primary: '#e9c0c0' },
        fighting: { secondary: '#e0d4bc', primary: '#f7a603' },
        normal: { secondary: '#F5F5F5', primary: '#757575' }
    }

    return data[pokemonType]

}
export const returnId = (url: string) => {
    url = url.slice(34)
    url = url.replace('/', '')
    return parseInt(url)
}