import React from "react";
import { Link } from "react-router-dom";

import "../style.css";

class Credits extends React.Component {
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
        <div className="contRegolamento contCredits">
          <div className="titolo">Credits</div>
          <div className="singleRule">
            <div className="testoRegola">Un gioco di</div>
            <div className="titoloRegola">Francesco Lancia</div>
          </div>
          <div className="singleRule">
            <div className="testoRegola">Sviluppo e testi</div>
            <div className="titoloRegola">Edoardo Accivile</div>
          </div>
          <div className="singleRule">
            <div className="testoRegola">Collaborazione ai testi</div>
            <div className="titoloRegola">Vittorio Di Resta</div>
          </div>
          <div className="singleRule">
            <div className="testoRegola">Realizzazione logo</div>
            <div className="titoloRegola">Marco Lombardo</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Credits;
