import React, { Component } from "react";
import "../style.css";

class Biscotto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {!this.props.usato ? (
          !this.props.active ? (
            <div
              onClick={this.props.onClick}
              className="biscotto biscottoVerde"
            >
              <div className="boxCat">
                <div className="number">
                  <div className="numberdiv">{this.props.number}</div>
                </div>

                <div className="catIndizioLeft">
                  <div className="catIndiziodivPurple">
                    {this.props.indizio}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              onClick={this.props.onClick}
              className="biscotto biscottoAttivo"
            >
              <div className="boxCat">
                <div className="catIndizioCenter">
                  <div className="catIndiziodivGreen">
                    {this.props.categoria}
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className=" biscotto biscottoUsato">
            <div className="boxCat">
              <div className="catIndizioCenter">
                <div className="catIndiziodivTransparent">
                  {this.props.categoria}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Biscotto;
