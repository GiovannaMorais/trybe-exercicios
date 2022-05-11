import React from "react";
import './App.css'

class FormDisplay extends React.Component {
  render() {
    const {
      atualState: {
        name,
        email,
        cpf,
        endereço,
        cidade,
        estado,
        moradia,
        resumo,
        cargo,
        descriçao,
      },
    } = this.props;
    return <div className="form">
        <h2> Dados Enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: { name }</div>
        <div> Email: { email }</div>
        <div> CPF: { cpf }</div>
        <div> Endereço: { endereço }</div>
        <div> Cidade: { cidade }</div>
        <div> Estado: { estado }</div>
        <div> Tipo de residência: { moradia }</div>
        <h3>Profissional</h3>
        <div> Currículo: { resumo }</div>
        <div> Cargo: { cargo }</div>
        <div> Descrição do cargo: { descriçao }</div>
    </div>;
  }
}
export default FormDisplay;
