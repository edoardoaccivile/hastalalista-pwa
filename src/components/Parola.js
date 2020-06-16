import React, { Component } from "react";
import "../style.css";

class Parola extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div onClick={this.props.onClick} className="biscotto biscottoParola">
        <div className="boxCat">
          <div className="number">
            <div className="numberdiv">{this.props.number}</div>
          </div>
          {this.props.scoperta ? (
            <div className="catIndizioCenter">
              <div className="catIndiziodivPurple">{this.props.categoria}</div>
            </div>
          ) : (
            <img
              alt="logotransp"
              src="logo_transp.svg"
              className="logotransp"
            />
          )}
        </div>
      </div>
    );
  }
}

export default Parola;
