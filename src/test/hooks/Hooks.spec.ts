import { capitalizeFirstLetter, pokemonColors, returnPrice, useAddZeroInNumber } from "../../core/hooks"

test('Testando hook que retorna a string com a primeira letra maiúscula!!', () => {
    expect(capitalizeFirstLetter('lucas'))
        .toBe('Lucas')
})
test('Testando hook que adiciona 0 no número!!', () => {
    expect(useAddZeroInNumber(9))
        .toBe('009')
    expect(useAddZeroInNumber(20))
        .toBe('020')
})

test('Testando hook que retorna as cores dos types dos Pokemons', () => {
    expect(pokemonColors({ pokemonType: 'fire' }))
        // .toBe({ secondary: '#fdafaf', primary: '#ff6c6c', name: 'red' })
})
test('Testando hook que retorna o preço dos Pokemons', () => {
    expect(returnPrice(10)).toBe(18)
})


