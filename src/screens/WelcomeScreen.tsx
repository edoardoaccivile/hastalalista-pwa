import React from "react";
import { Link } from "react-router-dom";

import "../style.css";

const WelcomeScreen: React.FC = () => {
  return (
    <div className="background">
      <img alt="logo" src="logo.png" className="logo" />
      <div className="contButton">
        <Link className="buttonPurple" to="/gioca">
          Gioca
        </Link>
        <Link className="buttonGreen" to="/regolamento">
          Regolamento
        </Link>
        <Link className="buttonGreen" to="/credits">
          Credits
        </Link>
      </div>
      <div>
        Hai dei suggerimenti su nuove categorie? Inviaci: gioco di parole,
        categoria e le 6 parole all'indirizzo edoardoaccivile@gmail.com
      </div>
    </div>
  );
};

export default WelcomeScreen;
