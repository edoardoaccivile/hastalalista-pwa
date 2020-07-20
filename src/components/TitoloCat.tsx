import React from "react";
import "../style.css";
import { TitoloCatProps } from "./types";

const TitoloCat: React.FC<TitoloCatProps> = ({ categoria }) => {
  return (
    <div className="biscotto">
      <div className="boxCat">
        <div className="catIndizioCenter">
          <div className="catIndizioTextGreen">{categoria}</div>
        </div>
      </div>
    </div>
  );
};

export default TitoloCat;
