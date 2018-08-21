import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Router exact path="/" component={Home} />
        <Router exact path="/saved" component={Saved} />
        <Router component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
