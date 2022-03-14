const pai = document.getElementById('pai');
    const irmaoElemento= document.createElement('section');
    irmaoElemento.id = 'irmaoElementoOndeVoceEsta';
    pai.appendChild(irmaoElemento);

    
    const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
    const filhoElemento = document.createElement('section');
    filhoElemento.id = 'filhoElemento';
    elementoOndeVoceEsta.appendChild(filhoElemento);

    
    const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
    const filhoPrimeiroFilhoDoFilho = document.createElement('section');
    filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
    primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);


    const terceiroFilho = filhoPrimeiroFilhoDoFilho
    .parentElement // primeiroFilhoDoFilho
      .parentElement // elementoOndeVoceEsta
      .nextElementSibling; // terceiroFilho
    
    
      console.log(terceiroFilho);
    console.log(filhoPrimeiroFilhoDoFilho)
    console.log(filhoElemento)
    console.log(irmaoElemento)