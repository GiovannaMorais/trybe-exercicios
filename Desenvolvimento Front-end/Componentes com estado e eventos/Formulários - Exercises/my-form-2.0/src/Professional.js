import React from "react";
import './App.css'

class Professional extends React.Component {
  render() {
    const { changeHandler } = this.props;
    return (
      <fieldset className='professional'>
        <legend>Dados Professionais</legend>
        <div className="container2">
          {" "}
          RESUMO DO CURRICULO:
          <textarea
            name="resumo"
            maxLength="1000"
            onChange={changeHandler}
            required
          ></textarea>
        </div>
        <div className="container2">
          {" "}
          CARGO:
          <input
            type="text"
            name="cargo"
            maxLength="40"
            required
            onChange={changeHandler}
            onMouseEnter={() => {
              alert("Preencha com cuidado esta informação.");
            }}
          />
        </div>
        <div className="container2">
          DESCRIÇAO DO CARGO:
          <textarea
            name="descriçao"
            maxLength="500"
            onChange={changeHandler}
            required
          ></textarea>
        </div>
      </fieldset>
    );
  }
}
export default Professional;
