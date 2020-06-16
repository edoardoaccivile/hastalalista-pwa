import React, { useState, useCallback } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../style.css";
import Biscotto from "./Biscotto";
import TitoloCat from "./TitoloCat";
import Parola from "./Parola";
import { Gioco1Props, BiscottoTS, StatoGioco1, ParolaTS } from "./types";

const Gioco1: React.FC<Gioco1Props> = ({ allBiscotti, handleGiocoAttivo }) => {
  const [statoBiscotti, setStatoBiscotti] = useState<BiscottoTS[]>(allBiscotti);
  const [statoGioco1, setStatoGioco1] = useState<StatoGioco1>({
    categoriaScelta: {
      biscottoScelto: {
        id: "",
        indizio: "",
        categoria: "",
        active: false,
        usato: false,
        parole: [],
      },
    },
    giocoInCorso: false,
    mostraParole: false,
    avanzamento: 0,
  });

  const handleActiveBiscotto = useCallback(
    (id: string) => {
      const nuoviBiscotti = statoBiscotti.map((item: BiscottoTS) => {
        if (item.id === id) {
          setStatoGioco1({
            ...statoGioco1,
            categoriaScelta: { biscottoScelto: item },
          });
          return {
            ...item,
            active: !item.active,
          };
        }
      });
      setStatoBiscotti(nuoviBiscotti);
    },
    [statoBiscotti, setStatoBiscotti, statoGioco1, setStatoGioco1]
  );

  const [statoParole, setStatoParole] = useState<ParolaTS[]>(
    statoGioco1.categoriaScelta.biscottoScelto.parole
  );
  const handleClickedParola = useCallback(
    (id: string) => {
      const nuoveParole = statoParole.map((item: ParolaTS) => {
        if (item.id === id) {
          return {
            ...item,
            scoperta: !item.scoperta,
          };
        }
      });
      setStatoParole(nuoveParole);
    },
    [statoParole, setStatoParole]
  );

  const handleUsedBiscotto = useCallback(
    (id: string) => {
      const nuoviBiscotti = statoBiscotti.map((item: BiscottoTS) => {
        if (item.id === id) {
          setStatoGioco1({
            avanzamento: statoGioco1.avanzamento + 1,
            giocoInCorso: false,
            mostraParole: false,
            categoriaScelta: {
              biscottoScelto: {
                id: "",
                indizio: "",
                categoria: "",
                active: false,
                usato: false,
                parole: [],
              },
            },
          });
          return {
            ...item,
            usato: !item.usato,
          };
        }
      });
      setStatoParole(nuoviBiscotti);
    },
    [statoBiscotti, setStatoBiscotti, statoGioco1, setStatoGioco1]
  );

  return (
    <div className="contGioco1">
      {!statoGioco1.mostraParole ? (
        <div className="container">
          <div className="contGioco1">
            {allBiscotti.map((item: BiscottoTS) => (
              <Biscotto
                key={item.id}
                number={item.id}
                indizio={item.indizio}
                categoria={item.categoria}
                active={item.active}
                usato={item.usato}
                onClick={() => handleActiveBiscotto(item.id)}
              />
            ))}
          </div>
          {statoGioco1.avanzamento === 6 && (
            <div
              onClick={() => handleGiocoAttivo("gioco2")}
              className="buttonPlay"
            >
              Passa al secondo gioco!
            </div>
          )}
          {statoGioco1.categoriaScelta.biscottoScelto !== {} &&
            !statoGioco1.mostraParole && (
              <div
                onClick={() =>
                  setStatoGioco1({
                    ...statoGioco1,
                    mostraParole: true,
                  })
                }
                className="buttonPlay"
              >
                <div className="scopriParolediv">Scopri le Parole!</div>
              </div>
            )}
        </div>
      ) : (
        <div className="container">
          <div className="contGioco1">
            {statoGioco1.categoriaScelta.biscottoScelto.categoria !== "" && (
              <TitoloCat
                categoria={statoGioco1.categoriaScelta.biscottoScelto.categoria}
              />
            )}
            {statoGioco1.categoriaScelta.biscottoScelto.parole.map((item) => (
              <Parola
                key={item.id}
                scoperta={item.scoperta}
                number={item.id}
                categoria={item.parola}
                onPress={() => handleClickedParola(item.id)}
              />
            ))}
          </div>
          {statoGioco1.mostraParole && !statoGioco1.giocoInCorso && (
            <div
              onClick={() =>
                setStatoGioco1({
                  ...statoGioco1,
                  giocoInCorso: true,
                })
              }
              className="buttonPlay"
            >
              <div className="playdiv">Gioca!</div>
            </div>
          )}
          {statoGioco1.giocoInCorso && (
            <div className="countdownSec">
              <CountdownCircleTimer
                isPlaying
                duration={10}
                colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                onComplete={() =>
                  handleUsedBiscotto(
                    statoGioco1.categoriaScelta.biscottoScelto.id
                  )
                }
              >
                {({ remainingTime }) => (
                  <div className="value">{remainingTime}</div>
                )}
              </CountdownCircleTimer>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Gioco1;
