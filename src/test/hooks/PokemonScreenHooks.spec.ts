import { pokemonInUserCart } from "../../pageComplements/pokemonScreen/hooks"


test('Testando hook verifica se o Pokemon está no cart do usuário!!', () => {
    expect(pokemonInUserCart([{
        _id: '12345'
    }, {
        _id: '54321'
    }], '12345')).toBe(true)

    expect(pokemonInUserCart([{
        _id: '12345'
    }, {
        _id: '54321'
    }], '123456')).toBe(false)
})
