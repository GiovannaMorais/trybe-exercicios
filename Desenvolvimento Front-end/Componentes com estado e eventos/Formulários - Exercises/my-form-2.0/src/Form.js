import React from "react";
import Professional from "./Professional";
import DadosPessoais from "./DadosPessoais";
import './App.css'

class Form extends React.Component {
  render() {
    const { setar, resetar, changeHandler, atualState, onBlurHandler } =
      this.props;
      console.log("this.props", this.props);
    return (
      <form>
        <DadosPessoais
          changeHandler={changeHandler}
          onBlurHandler={onBlurHandler}
          atualState={atualState}
        />
        <Professional changeHandler={changeHandler} 
        />

        <input className="bottao" type="button" onClick={setar} value="Enviar" />
        <input className="bottao"type="reset" onClick={resetar} value="Limpar" />
      </form>
    );
  }
}
export default Form;
