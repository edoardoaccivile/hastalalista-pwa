import React, { Component } from "react";
import "../style.css";

class TitoloCat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="biscotto">
        <div className="boxCat">
          <div className="catIndizioCenter">
            <div className="catIndizioTextGreen">{this.props.categoria}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TitoloCat;
