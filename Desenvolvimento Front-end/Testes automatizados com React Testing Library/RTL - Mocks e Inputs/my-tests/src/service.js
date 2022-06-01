function fetchDog() {
  const url = "https://dog.ceo/api/breeds/image/random";
  return fetch(url).then((response) =>
    response
      .json()
      .then((data) =>
        response.ok ? Promise.resolve(data) : Promise.reject(data)
      )
  );
}
module.exports = { fetchDog };

const NumeroAleatorio = () => {
  const numero = Math.floor(Math.random() * 101);
  console.log(numero);
  return numero;
};
module.exports = { NumeroAleatorio };

const UppercaseLetter = (string) => string.toUpperCase();

const LastLetter = (string) => string.substr(-1);

const ConcatString = (string1, string2) => string1.concat(string2);

module.exports = {
  UppercaseLetter,
  LastLetter,
  ConcatString,
};
