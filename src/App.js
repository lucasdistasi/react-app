import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavbarComponent from "./component/NavbarComponent";

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <NavbarComponent/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
