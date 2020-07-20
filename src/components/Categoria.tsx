import React from "react";
import "../style.css";
import { CategoriaParolaProps } from "./types";

const Categoria: React.FC<CategoriaParolaProps> = ({
  onClick,
  number,
  categoria,
  scoperta,
}) => {
  return (
    <div onClick={onClick} className="biscotto">
      <div className="boxCat">
        <div className="number">
          <div className="numberdiv">{number}</div>
        </div>
        {scoperta ? (
          <div className="catIndizioLeft">
            <div className="catIndiziodivPurple">{categoria}</div>
          </div>
        ) : (
          <img alt="contain" src="logo_transp.png" className="logo" />
        )}
      </div>
    </div>
  );
};

export default Categoria;
