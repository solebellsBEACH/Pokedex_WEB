import { isActiveUtil } from "../../core/components/FilterButton/handles"

test('Testando handle que verifica se filtro está ativo!', () => {
    expect(isActiveUtil(['pokemon1', 'pokemon2', 'pokemon3'], 'pokemon1'))
        .toBe(true)
    expect(isActiveUtil(['pokemon1', 'pokemon2', 'pokemon3'], 'pokemon4'))
        .toBe(false)
})