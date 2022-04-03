const myRemove = require('./myRemove.js');

describe('Retorne array esperado',()=>{
    it('deve retornar um array removendo o item correto',()=>{
        const array = [1,2,3,4]
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4])
        expect(myRemove(array,3)).not.toEqual([1,2,3,4])
        expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
    })
})