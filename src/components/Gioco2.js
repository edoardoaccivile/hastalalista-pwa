import React from "react";
import { Link } from "react-router-dom";

import "../style.css";

class Gioco2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="background">
        <Link to="/">
          <img alt="logoesteso" src="logo_esteso.png" className="logoesteso" />
        </Link>
        <div className="contRegolamento contGioco2">
          <div className="titolo">Gioco2</div>
        </div>
      </div>
    );
  }
}

export default Gioco2;
