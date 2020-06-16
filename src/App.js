import React from "react";
import { Switch } from "react-router";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import "./App.css";

import WelcomeScreen from "./screens/WelcomeScreen";
import Regolamento from "./screens/Regolamento";
import Credits from "./screens/Credits";
import Gioca from "./screens/Gioca";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <WelcomeScreen exact path="/" />
          <Gioca exact path="/gioca" />
          <Regolamento exact path="/regolamento" />
          <Credits exact path="/credits" />
        </Switch>
      </Router>
    );
  }
}

export default App;
