import React from "react";
import { connect } from 'react-redux';
import { login } from './actions';
import { Link } from "react-router-dom";

 class Login extends React.Component {

state = {
    email:'',
    password:'',
}
// handleChange = ({target}) => {
//     const {name} = target
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     this.setState({ [name]: value })
// }



  render() {
      const {email, password} = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            // onChange={this.handleChange}
            onChange={e => this.setState({ email: e.target.value })}
            // value={email}
            placeholder="email"
            name={email}
          />
          <input
            type="password"
            // onChange={this.handleChange}
            onChange={e => this.setState({ password: e.target.value })}
            // value={password}
            placeholder="senha"
            name={password}
          />
            <Link to='/clients'
            onClick={() => this.props.login({email, password })}
            >Entrar
            </Link>

        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
    login: e => dispatch(login(e))
})
export default connect(null, mapDispatchToProps)(Login);