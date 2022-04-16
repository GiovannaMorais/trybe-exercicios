// EXERCISE 7

const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  it('Verifica todas as letras em uppercase',(done) => {
    uppercase('giovanna',(str) => {
        try{
            expect(str).toBe('GIOVANNA');
            done();
        }catch (erro){
            done(erro);
        }
    });
  });