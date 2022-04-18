const fetchMoedas = async () => {
    const API_URL = 'https://api.coincap.io/v2/assets';

 const moedas = await fetch(API_URL)
    .then((response) =>response.json())
    .then((data) =>data.data)
    .catch((err) =>err.toString())

return moedas;
}

const fetchReal = async () => {
    const baseURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';
    const endPoint = '/currencies/usd.min.json'
    const url = baseURL.concat(endPoint)

    const moedaDollar = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd)
    .catch((err) => err.toString())

    return moedaDollar;
};

const moedas = async () => {
    const moeda = await fetchMoedas();
    const dollar = await fetchReal();
    const list = document.getElementById('listMoedas');

    moeda.filter((moeda) => moeda.rank <=10).forEach((moeda) =>{
        const lista = document.createElement('li');
        const precoTempoReal = Number(moeda.priceUsd) * dollar.brl;
        // const dollarParaReal = precoTempoReal * dollar.brl;

        lista.innerText = `${moeda.name} (${moeda.symbol}): ${Math.round(precoTempoReal.toFixed(2))} reais`;
        list.appendChild(lista);
    });
}

window.onload =() => moedas();