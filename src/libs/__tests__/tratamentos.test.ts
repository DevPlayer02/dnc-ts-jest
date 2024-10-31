import { ultimoValor } from "../tratamentos"
import { listaMock } from "../__mocks_/tratamentos.mock"

describe('tratamentos suite', () => {
    it('deve retornar Carol', () => {
        expect(ultimoValor(listaMock)).toBe('Carol')
    })

    it('não deve retornar Xoxo', () => {
        expect(ultimoValor(listaMock)).not.toBe('Xoxo')
    })
})

