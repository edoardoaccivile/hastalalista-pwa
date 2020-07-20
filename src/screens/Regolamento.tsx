import React from "react";
import { Link } from "react-router-dom";

import "../style.css";

const Regolamento: React.FC = () => {
  return (
    <div className="background">
      <Link to="/">
        <img alt="logoesteso" src="logo_esteso.png" className="logoesteso" />
      </Link>
      <div className="contRegolamento">
        <div className="titolo">Regolamento</div>
        <div className="singleRule">
          <div className="titoloRegola">Primo Gioco</div>
          <div className="testoRegola">
            Si gioca su 6 categorie, 3 per ognuna squadra. Appariranno le
            categorie che 'nasconderanno' il vero argomento della lista. Al
            proprio turno si sceglie quale dei due giocatori deve indovinare e
            quale deve far indovinare. Una volta scelto, il giocatore che deve
            far indovinare prende in mano il telefono e seleziona una delle
            categorie. Il primo dovrà far indovinare utilizzando il linguaggio
            della parola senza poter utilizzare parole o termini con la stessa
            radice della parola da far indovinare. Ogni parola indovinata vale 1
            punto.
          </div>
        </div>
        <div className="singleRule">
          <div className="titoloRegola">Secondo Gioco</div>
          <div className="testoRegola">
            Nel secondo gioco si scopre la categoria e ogni giocatore, seguendo
            il giro in senso orario, ha 5 secondi per dire un elemento
            appartenente a quella categoria, il primo giocatore che dice un
            elemento che non ha legami con la categoria, o ripete qualcosa di
            già detto, regala 3 punti alla squadra avversaria e si procede
            all'estrazione della nuova categoria. Si gioca su 6 categorie.
          </div>
        </div>
        <div className="singleRule">
          <div className="titoloRegola">Terzo Gioco</div>
          <div className="testoRegola">
            Nel terzo gioco è la categoria a dover essere indovinata. La coppia
            sceglie chi fa indovinare e chi deve indovinare, il deputato a fare
            indovinare può solamente dire elementi di una categoria (es. se la
            categoria da far indovinare è "Cose da frutteria", si potrà iniziare
            a dire: pesca, pera, fragole, mele...). 60 secondi per indovinare 6
            categorie, comincia la squadra in svantaggio nel punteggio. Si
            ottengono: 5 punti per 4 categorie indovinate, 10 per 5 categorie
            indovinate e 15 punti per tutte e 6 le categorie indovinate.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regolamento;
