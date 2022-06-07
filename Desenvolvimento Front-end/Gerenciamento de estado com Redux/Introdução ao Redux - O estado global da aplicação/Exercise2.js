const ESTADO_INICIAL_1 = {
    nome: 'Rodrigo',
    sobrenome: 'Santos da Silva',
    endereco: 'Rua Soldado Mathias, 765',
    cidade: 'Belo Horizonte',
  };

  const ESTADO_INICIAL_2 = {
    nome: 'Bruna',
    sobrenome: 'Santana Oliveira',
    endereco: 'Rua Holanda, 332',
    cidade: 'São Paulo',
  };

  const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
    switch (action.type) {
        case 'FirstFullName': 
        return {
            ...state,
            nome:action.nome,
            sobrenome:action.sobrenome,
        }
      default:
        return state;
    }
  };

  const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
    switch (action.type) {
        case 'SecondFullName':
            return {
              ...state,
              nome: action.nome,
              sobrenome: action.sobrenome,
            };
      default:
        return state;
    }
  };

  const rootReducer = Redux.combineReducers({ meuPrimeiroReducer, meuSegundoReducer });

  const store = Redux.createStore(rootReducer);

  window.onload = () => {
    setTimeout(() => {
    store.dispatch({
        type: 'FirstFullName',
        nome:'Giovanna',
        sobrenome:'Morais'
    });
    store.dispatch({
        type: 'SecondFullName',
        nome:'Carla',
        sobrenome:'Gomes'
    })
    }, 3000);
  };

  store.subscribe(() => {
      const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
      const firstName = document.querySelector('#nome-1');
      const SecondName = document.querySelector('#nome-2');
      const firstLastName = document.querySelector('#sobrenome-1');
      const secondLastName = document.querySelector('#sobrenome-2');

     firstName.innerHTML = meuPrimeiroReducer.nome;
     SecondName.innerHTML = meuSegundoReducer.nome;

     firstLastName.innerHTML = meuPrimeiroReducer.sobrenome;
     secondLastName.innerHTML = meuSegundoReducer.sobrenome;
  })