import { listaMock, listaUrbanaMock } from "../__mocks_/tratamentos.mock"
import { descobrirNomes } from "../nomes"
import * as tratamentos from "../tratamentos"

describe('nomes suites', () => {
    it('deve retornar o último nome de cada lista', () => {
        expect(descobrirNomes([listaMock, listaUrbanaMock])).toBe("Carol")
    })

    it('deve chamar a função ultimoValor', () => {
        
        const ultimoValorMock = jest.spyOn(tratamentos, 'ultimoValor')
        
        descobrirNomes([
            listaMock, listaUrbanaMock
        ])
        expect(ultimoValorMock).toBeCalled()
    })
})