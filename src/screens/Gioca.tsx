import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

import "../style.css";
import Gioco1 from "../components/Gioco1";
import Gioco2 from "../components/Gioco2";
import Gioco3 from "../components/Gioco3";
import { GiocoStart } from "../components/types";

const Gioca = () => {
  const [statoGioco, setStatoGioco] = useState<GiocoStart>({
    giocoAttivo: "gioco1",
    biscottiGioco1: [],
    biscottiGioco2: [],
    biscottiGioco3: [],
    loading: true,
  });

  useEffect(() => {
    fetch(
      `https://www.accedodigitalagency.com/hastalalista/estrai18categorie.php`
    )
      .then((response) => response.json())
      .then((response) => {
        setStatoGioco({
          ...statoGioco,
          loading: false,
          biscottiGioco1: response["gioco1"],
          biscottiGioco2: response["gioco2"],
          biscottiGioco3: response["gioco3"],
        });
      });
  }, []);

  const handleGiocoAttivo = (giocoId: string) => {
    setStatoGioco({
      ...statoGioco,
      giocoAttivo: giocoId,
    });
  };

  return (
    <div className="background">
      <Link to="/">
        <img alt="logoesteso" src="logo_esteso.png" className="logoesteso" />
      </Link>
      <div className="contGioca">
        {statoGioco.giocoAttivo === "gioco1" && !statoGioco.loading && (
          <Gioco1
            allBiscotti={statoGioco.biscottiGioco1}
            handleGiocoAttivo={handleGiocoAttivo}
          />
        )}
        {statoGioco.giocoAttivo === "gioco2" && !statoGioco.loading && (
          <Gioco2
            allBiscotti={statoGioco.biscottiGioco2}
            handleGiocoAttivo={handleGiocoAttivo}
          />
        )}
        {statoGioco.giocoAttivo === "gioco3" && !statoGioco.loading && (
          <Gioco3
            allBiscotti={statoGioco.biscottiGioco3}
            handleGiocoAttivo={handleGiocoAttivo}
          />
        )}
      </div>
    </div>
  );
};

export default Gioca;
