
const myFizzBuzz =  require('./myFizzBuzz.js');

describe('testa a função myFizzBuzz', () =>{
    it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
       expect(myFizzBuzz(15)).toBe('fizzbuzz')
       expect(myFizzBuzz(12)).toBe('fizz')
       expect(myFizzBuzz(10)).toBe('buzz')
       expect(myFizzBuzz(11)).toBe(11)
       expect(myFizzBuzz('11')).toBe(false)
    })
})