const sum = require('./sum');

describe('Requisito 1',()=>{
    it ('Retorne resultado da soma',()=>{
        expect (sum(4,5)).toBe(9)
        expect(sum(0, 0)).toBe(0);
    })
})
it('ocorrer erro caso receba um parâmetro string',()=>{
 expect(() => sum(4,'5')).toThrowError();
 expect(()=> sum(4,'5')).toThrowError('parameters must be numbers')
})