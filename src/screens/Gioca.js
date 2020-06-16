import React from "react";
import { Link } from "react-router-dom";

import "../style.css";
import Gioco1 from "../components/Gioco1.tsx";
import Gioco2 from "../components/Gioco2";
import Gioco3 from "../components/Gioco3";

class Gioca extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      giocoAttivo: "gioco1",
      biscottiGioco1: [],
      biscottiGioco2: [],
      biscottiGioco3: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch(
      `https://www.accedodigitalagency.com/hastalalista/estrai18categorie.php`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          loading: false,
          biscottiGioco1: response["gioco1"],
          biscottiGioco2: response["gioco2"],
          biscottiGioco3: response["gioco3"],
        });
      });
  }

  handleGiocoAttivo(giocoId) {
    this.setState({
      giocoAttivo: giocoId,
    });
  }

  render() {
    return (
      <div className="background">
        <Link to="/">
          <img alt="logoesteso" src="logo_esteso.png" className="logoesteso" />
        </Link>
        <div className="contGioca">
          {this.state.giocoAttivo === "gioco1" && !this.state.loading && (
            <Gioco1
              data={this.state.biscottiGioco1}
              handleGiocoAttivo={this.handleGiocoAttivo}
            />
          )}
          {this.state.giocoAttivo === "gioco2" && !this.state.loading && (
            <Gioco2
              data={this.state.biscottiGioco2}
              handleGiocoAttivo={this.handleGiocoAttivo}
            />
          )}
          {this.state.giocoAttivo === "gioco3" && !this.state.loading && (
            <Gioco3
              data={this.state.biscottiGioco3}
              handleGiocoAttivo={this.handleGiocoAttivo}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Gioca;
