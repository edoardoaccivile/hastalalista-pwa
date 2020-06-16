import React, { Component } from "react";
import "../style.css";

class Categoria extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div onClick={this.props.onClick} className="biscotto">
        <div className="boxCat">
          <div className="number">
            <div className="numberdiv">{this.props.number}</div>
          </div>
          {this.props.scoperta ? (
            <div className="catIndizioLeft">
              <div className="catIndiziodivPurple">{this.props.categoria}</div>
            </div>
          ) : (
            <img alt="contain" src="logo_transp.png" className="logo" />
          )}
        </div>
      </div>
    );
  }
}

export default Categoria;
