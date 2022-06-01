const service = require('./service');
describe("Testando a chamada da função:", () => {
it('testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada',()=>{
    service.NumeroAleatorio = jest.fn().mockReturnValue(10);

    expect(service.NumeroAleatorio()).toBe(10);
    expect(service.NumeroAleatorio).toHaveBeenCalled();
    expect(service.NumeroAleatorio).toHaveBeenCalledTimes(1);
})
it('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros',()=>{
    service.NumeroAleatorio = jest.fn().mockImplementationOnce((a,b) => a / b);

    expect(service.NumeroAleatorio(8,2)).toBe(4);
    expect(service.NumeroAleatorio).toHaveBeenCalled();
    expect(service.NumeroAleatorio).toHaveBeenCalledTimes(1);
    expect(service.NumeroAleatorio).toHaveBeenCalledWith(8,2);
})
});

describe("Testando implementações:", () => {

    it('mockando função para receber 3 parâmetros e retornar sua multiplicação',()=>{
        service.NumeroAleatorio = jest.fn().mockImplementationOnce((a,b,c) => a * b * c) ;
    
        expect(service.NumeroAleatorio(2,4,6)).toBe(48);
        expect(service.NumeroAleatorio).toHaveBeenCalled();
        expect(service.NumeroAleatorio).toHaveBeenCalledTimes(1);
        expect(service.NumeroAleatorio).toHaveBeenCalledWith(2,4,6);
    })

    it('mockando função que recebe um parâmetro e retorna seu dobro',() =>{
        service.NumeroAleatorio.mockReset();
        expect(service.NumeroAleatorio).toHaveBeenCalledTimes(0);

        service.NumeroAleatorio.mockImplementationOnce(a => a * 2);

        expect(service.NumeroAleatorio(4)).toBe(8);
        expect(service.NumeroAleatorio).toHaveBeenCalled();
        expect(service.NumeroAleatorio).toHaveBeenCalledTimes(1);
        expect(service.NumeroAleatorio).toHaveBeenCalledWith(4)
    })

});


describe("Testando implementações com as Novas Funções:", () => {
    it("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
        const firstFunction = jest.spyOn(service,'UppercaseLetter').mockImplementation(string => string.toLowerCase());
        expect(firstFunction("UPPERCASE")).toBe("uppercase");
        expect(service.UppercaseLetter).toHaveBeenCalled();
        expect(service.UppercaseLetter).toHaveBeenCalledTimes(1);
        expect(service.UppercaseLetter).toHaveBeenCalledWith("UPPERCASE");
        expect(service.UppercaseLetter).not.toHaveBeenCalledWith("uppercase");
    })
    it("mockando função que recebe um parâmetro e retorna a última letra", () => {
        const secondFunction = jest.spyOn(service,'LastLetter').mockImplementation(string => string.substr(-1));
        expect(secondFunction("Giovanna")).toBe("a");
        expect(service.LastLetter).toHaveBeenCalled();
        expect(service.LastLetter).toHaveBeenCalledTimes(1);
        expect(service.LastLetter).toHaveBeenCalledWith("Giovanna");
        expect(service.LastLetter).not.toHaveBeenCalledWith("giovanna");
    })
    it("mockando função que recebe 3 parâmetros e os concatena", () => {
        const thirdFunction = jest.spyOn(service,'ConcatString').mockImplementation((string1, string2) => string1.concat(string2));
        expect(thirdFunction("Giov","anna")).toBe("Giovanna");
        expect(service.ConcatString).toHaveBeenCalled();
        expect(service.ConcatString).toHaveBeenCalledTimes(1);
        expect(service.ConcatString).toHaveBeenCalledWith("Giov","anna");
        expect(service.ConcatString).not.toHaveBeenCalledWith("giovanna");
    })
    it("restaurando a primeira função e verifica se ela retorna em caixa alta", () => {
        service.UppercaseLetter.mockRestore();
    
        expect(service.UppercaseLetter("giovanna")).toBe("GIOVANNA");
      })
});

describe("Testando a requisição:", () => {
service.fetchDog = jest.fn();
afterEach(service.fetchDog.mockReset);

it("testando requisição caso a promise resolva", async () => {
    service.fetchDog.mockResolvedValue("request success");

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe("request success");
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
})

it("testando requisição caso a promise seja rejeitada", async () => {
    service.fetchDog.mockRejectedValue("request failed");

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toBe("request failed");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);


})

});