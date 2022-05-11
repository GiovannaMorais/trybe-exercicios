import React from "react";
import Form from "./Form";
import FormDisplay from "./FormDisplay";
import FormError from "./FormError";
import './App.css'

const estadoInicial = {
  name: "",
  email: "",
  cpf: "",
  endereço: "",
  cidade: "",
  estado: "",
  moradia: "",
  resumo: "",
  cargo: "",
  descriçao: "",
  formError: {},
  submitted: false,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = estadoInicial;
  }

  handleState = (name, value) => {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value),
      },
    }));
  };

  changeHandler = (event) => {
    let { name, value } = event.target;
    if (name === "name") value = value.toUpperCase();
    if (name === "endereço") value = this.validarEndereço(value);
    this.handleState(name, value);
  };

  validarEndereço = (endereço) => endereço.replace(/[^\w\s]/gi, "");

  onBlurHandler = (event) => {
    let { name, value } = event.target;
    if (name === "cidade") value = value.match(/^\d/) ? "" : value;
    this.handleState(name, value);
  };

  validateField(fieldName, value) {
    switch (fieldName) {
      case "email":
        const isValid = value.match(
          /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        );
        return isValid ? "" : " is invalid";
      default:
        break;
    }
    return "";
  }

  resetar = () => {
    this.setState(estadoInicial);
  };
  setar = () => {
    this.setState({ submitted: true });
  };

  render() {
    const { submitted } = this.state;
    console.log("teste", this.state);
    return (
      <main>
        <Form
          setar={this.setar}
          resetar={this.resetar}
          changeHandler={this.changeHandler}
          atualState={this.state}
          onBlurHandler={this.onBlurHandler}
        />
        <div className="container">
          <FormError formError={this.state.formError} />
        </div>
        {submitted && <FormDisplay atualState={this.state} />}
      </main>
    );
  }
}

export default App;
