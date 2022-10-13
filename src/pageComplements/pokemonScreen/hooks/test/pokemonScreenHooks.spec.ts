import { pokemonInUserCart } from '..'

test('Testando hook verifica se o Pokemon está no cart do usuário!!', () => {
    expect(pokemonInUserCart([{
        _id: '12345',
        name: 'string',
        front_default: 'string'
    }, {
        _id: '54321',
        name: 'string',
        front_default: 'string'
    }], '12345')).toBe(true)

    expect(pokemonInUserCart([{
        _id: '12345',
        name: 'string',
        front_default: 'string'
    }, {
        _id: '54321',
        name: 'string',
        front_default: 'string'
    }], '123456')).toBe(false)
})
