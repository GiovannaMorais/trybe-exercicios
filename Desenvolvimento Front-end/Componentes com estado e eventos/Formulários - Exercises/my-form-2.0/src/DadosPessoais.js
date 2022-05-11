import React from "react";
import './App.css'
const states = [
  "Rio de Janeiro",
  "Minas Gerais",
  "Amapá",
  "Amazonas",
  "São Paulo",
  "Ceará",
  "Distrito Federal",
];
class DadosPessoais extends React.Component {
  render() {
    const { changeHandler, onBlurHandler, atualState } = this.props;
    return (
      <fieldset className = 'dados'>
        <legend> Dados Pessoais</legend>
        <div className="container">
          NOME:
          <input
            type="name"
            name="name"
            maxLength="40"
            required
            onChange={changeHandler}
          />
        </div>

        <div className="container">
          EMAIL:
          <input
            type="email"
            name="email"
            maxLength="50"
            required
            onChange={changeHandler}
          />
        </div>

        <div className="container">
          CPF:
          <input
            type="text"
            name="cpf"
            maxLength="11"
            required
            onChange={changeHandler}
          />
        </div>

        <div className="container">
          ENDEREÇO:
          <input
            type="text"
            name="endereço"
            maxLength="200"
            required
            onChange={changeHandler}
          />
        </div>

        <div className="container">
          CIDADE:
          <input
            type="text"
            name="cidade"
            maxLength="28"
            required
            value={atualState.cidade}
            onBlur={onBlurHandler}
            onChange={changeHandler}
          />
        </div>

        <div className="container">
          ESTADO:
          <select
            name="estado"
            required
            onChange={changeHandler}
            // defaultValue=""
          >
            <option value="">Selecione</option>
            {states.map((value, key) => (
              <option key={key}>{value}</option>
            ))}
          </select>
        </div>

        <div className="container">
          {/* <label htmlFor="house"> */}
            <input
              type="radio"
              id="casa"
              name="moradia"
              value="casa"
              onChange={changeHandler}
            />
            Casa
          {/* </label> */}
          {/* <label htmlFor="apart"> */}
            <input
              type="radio"
              id="apartamento"
              name="moradia"
              value="apartamento"
              onChange={changeHandler}
            />
            Apartamento
          {/* </label> */}
        </div>
      </fieldset>
    );
  }
}
export default DadosPessoais;
