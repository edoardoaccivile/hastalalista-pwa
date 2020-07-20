import React, { useState, useCallback, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../style.css";
import TitoloCat from "./TitoloCat";
import Parola from "./Parola";
import Biscotto from "./Biscotto";
import { GiochiProps, BiscottoTS, StatoGioco1, ParolaTS } from "./types";

const Gioco1: React.FC<GiochiProps> = ({ allBiscotti, handleGiocoAttivo }) => {
  const [statoBiscotti, setStatoBiscotti] = useState<BiscottoTS[]>(allBiscotti);
  const [statoGioco1, setStatoGioco1] = useState<StatoGioco1>({
    categoriaScelta: {
      biscottoScelto: {
        id: undefined,
        indizio: undefined,
        categoria: undefined,
        active: false,
        usato: false,
        parole: [],
      },
    },
    giocoInCorso: false,
    mostraParole: false,
    avanzamento: 0,
  });

  const handleActiveBiscotto = (id: string) => {
    const nuoviBiscotti: BiscottoTS[] = statoBiscotti.map(
      (item: BiscottoTS) => {
        if (item.id === id) {
          setStatoGioco1({
            ...statoGioco1,
            categoriaScelta: {
              biscottoScelto: {
                active: item.active,
                parole: item.parole,
                usato: item.usato,
                categoria: item.categoria,
                id: item.id,
                indizio: item.indizio,
              },
            },
          });
          return {
            ...item,
            active: !item.active,
          };
        } else {
          return item;
        }
      }
    );
    setStatoBiscotti(nuoviBiscotti!);
  };

  const [statoParole, setStatoParole] = useState<ParolaTS[]>([]);

  useEffect(() => {
    console.log("statoGioco1", statoGioco1);
    setStatoParole(statoGioco1.categoriaScelta.biscottoScelto.parole!);
  }, [statoGioco1]);

  const handleClickedParola = (id: string) => {
    const nuoveParole: ParolaTS[] = statoParole.map((item: ParolaTS) => {
      console.log(item);
      if (item.id === id) {
        return {
          ...item,
          scoperta: !item.scoperta,
        };
      } else {
        return item;
      }
    });
    console.log("nuoveParole", nuoveParole);
    console.log("statoParole", statoParole);
    setStatoParole(nuoveParole);
  };

  const handleUsedBiscotto = (id: string) => {
    const nuoviBiscotti = statoBiscotti.map((item: BiscottoTS) => {
      if (item.id === id) {
        setStatoGioco1({
          avanzamento: statoGioco1.avanzamento + 1,
          giocoInCorso: false,
          mostraParole: false,
          categoriaScelta: {
            biscottoScelto: {
              id: undefined,
              indizio: undefined,
              categoria: undefined,
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
      } else {
        return item;
      }
    });
    setStatoBiscotti(nuoviBiscotti);
  };

  return (
    <div className="contGioco1">
      {!statoGioco1.mostraParole ? (
        <div className="container">
          <div className="contGioco1">
            {statoBiscotti.map((item: BiscottoTS) => (
              <Biscotto
                key={item.id}
                number={item.id}
                indizio={item.indizio}
                categoria={item.categoria}
                active={item.active}
                usato={item.usato}
                onClick={() => handleActiveBiscotto(item.id!)}
              />
            ))}
          </div>
          {statoGioco1.avanzamento >= 6 && (
            <div
              onClick={() => handleGiocoAttivo("gioco2")}
              className="buttonPlay"
            >
              Passa al secondo gioco!
            </div>
          )}
          {statoGioco1.categoriaScelta.biscottoScelto.id &&
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
            {statoGioco1.categoriaScelta.biscottoScelto.categoria && (
              <TitoloCat
                categoria={
                  statoGioco1.categoriaScelta.biscottoScelto.categoria!
                }
              />
            )}
            {statoParole.map((item) => {
              console.log("item qua", item);
              return (
                <Parola
                  key={item.id}
                  scoperta={item.scoperta}
                  number={item.id}
                  categoria={item.parola}
                  onClick={() => handleClickedParola(item.id)}
                />
              );
            })}
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
                colors={[
                  ["#004777", 0.33],
                  ["#F7B801", 0.33],
                  ["#A30000", 0.34],
                ]}
                onComplete={() =>
                  handleUsedBiscotto(
                    statoGioco1.categoriaScelta.biscottoScelto.id!
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
