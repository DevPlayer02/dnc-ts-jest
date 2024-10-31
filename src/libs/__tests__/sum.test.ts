import { sum } from "../sum"

describe('libs suite', () => {
    describe('sum suite', () => {
        it('should return true', () => {
            expect(true).toBe(true)
        })

        it('deverá retornar 4', () => {
            expect(sum(2, 2)).toEqual(4);
        })

        it('deverá escrever Xoxo', () => {
            expect('X'+'o'+'x'+'o').toEqual('Xoxo');
        })

        it('não deverá escrever Giovani', () => {
            expect('X'+'o'+'x'+'o').not.toEqual('Giovani');
        })
    })
})