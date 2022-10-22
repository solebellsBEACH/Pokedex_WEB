import { returnSlidesToShow } from '../../core/components/Carousel/handles'

test('Testando handle que define a quantidade de imagens no Carousel!!', () => {
    expect(returnSlidesToShow(true, true))
        .toBe(3)
    expect(returnSlidesToShow(false, true))
        .toBe(2)
    expect(returnSlidesToShow(false, false))
        .toBe(1)
})
