import React from "react";
import "../style.css";
import { CategoriaParolaProps } from "./types";

const Parola: React.FC<CategoriaParolaProps> = ({
  onClick,
  number,
  scoperta,
  categoria,
}) => {
  console.log(scoperta);
  return (
    <div onClick={onClick} className="biscotto biscottoParola">
      <div className="boxCat">
        <div className="number">
          <div className="numberdiv">{number}</div>
        </div>
        {scoperta ? (
          <div className="catIndizioCenter">
            <div className="catIndiziodivPurple">{categoria}</div>
          </div>
        ) : (
          <img alt="logotransp" src="logo_transp.svg" className="logotransp" />
        )}
      </div>
    </div>
  );
};

export default Parola;
