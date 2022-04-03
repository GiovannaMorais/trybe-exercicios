function encode(vogais) { //  https://blog.betrybe.com/javascript/javascript-replace/
    vogais = vogais.replace(/a/g, '1');
    vogais = vogais.replace(/e/g, '2');
    vogais = vogais.replace(/i/g, '3');
    vogais = vogais.replace(/o/g, '4');
    vogais = vogais.replace(/u/g, '5');
    return vogais;
  }
  function decode(codigo) {
    codigo = codigo.replace(/1/g, 'a');
    codigo = codigo.replace(/2/g, 'e');
    codigo = codigo.replace(/3/g, 'i');
    codigo = codigo.replace(/4/g, 'o');
    codigo = codigo.replace(/5/g, 'u');
    return codigo;
  }

  const functions = { encode, decode };
module.exports = functions;