import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRegister } from './actions';

class Clients extends React.Component {

  state = {
    ordened:false,
  }

  generateRegisters = array =>
  array.map(register => (
    <div key={register.email}>
      <p>Nome: {register.name}</p>
      <p>Idade: {register.age}</p>
      <p>Email: {register.email}</p>
      <button onClick={() => this.props.delete(register)}>X</button>
    </div>
  ));


  orderRegisters = () => {
    const ordened = [...this.props.registrados];
    console.log("ordened", ordened);
    
    ordened.sort((a,b) => {
      const letterA = a.name.toUpperCase();
      const letterB = b.name.toUpperCase();

      let comparison = 0;

      if(letterA < letterB){
        comparison = -1;
      }
      else if (letterA > letterB ) {
        comparison = 1
      }
      return comparison;

    })
    return ordened
  }

  
  render() {
    const { registrados, userLogin } = this.props;
    const { ordened } = this.state;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    if (registrados.length < 1)
      return (
        <div>
          <div>Nenhum cliente cadastrado</div>
          <Link to="/register">Cadastre agora!</Link>
        </div>
      );
    return (
      <div>
        <Link to="/register">Cadastre outros!</Link>
        <button
          onClick={() => this.setState(state => ({ ordened: !state.ordened }))}>
          Ordenar
        </button>
        <div>
          {this.generateRegisters(ordened ? this.orderRegisters() : registrados)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registrados: state.registerReducer,
  userLogin: state.loginReducer});

  const mapDispatchToProps = dispatch => ({
    delete: e => dispatch(deleteRegister(e))});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);