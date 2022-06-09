import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div>
          Bem-vindo ao sistema de cadastramento!
        <Link to='/login'>Faça seu Login!</Link>
      </div>
    );
  }
}
