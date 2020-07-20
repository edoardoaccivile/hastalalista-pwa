import React from "react";
import { Link } from "react-router-dom";

import "../style.css";
import { GiochiProps } from "./types";

const Gioco3: React.FC<GiochiProps> = ({ allBiscotti, handleGiocoAttivo }) => {
  return (
    <div className="background">
      <Link to="/">
        <img alt="logoesteso" src="logo_esteso.png" className="logoesteso" />
      </Link>
      <div className="contRegolamento contGioco2">
        <div className="titolo">Gioco3</div>
      </div>
    </div>
  );
};

export default Gioco3;
