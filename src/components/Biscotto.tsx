import React from "react";
import "../style.css";
import { BiscottoProps } from "./types";

const Biscotto: React.FC<BiscottoProps> = ({
  number,
  indizio,
  categoria,
  active,
  usato,
  onClick,
}) => {
  return (
    <div>
      {!usato ? (
        !active ? (
          <div onClick={onClick} className="biscotto biscottoVerde">
            <div className="boxCat">
              <div className="number">
                <div className="numberdiv">{number}</div>
              </div>

              <div className="catIndizioLeft">
                <div className="catIndiziodivPurple">{indizio}</div>
              </div>
            </div>
          </div>
        ) : (
          <div onClick={onClick} className="biscotto biscottoAttivo">
            <div className="boxCat">
              <div className="catIndizioCenter">
                <div className="catIndiziodivGreen">{categoria}</div>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className=" biscotto biscottoUsato">
          <div className="boxCat">
            <div className="catIndizioCenter">
              <div className="catIndiziodivTransparent">{categoria}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Biscotto;
