import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Poll from "./Components/Poll";
import Results from "./Components/Results";
import PollMaker from "./Components/PollMaker";
import Update from './Components/Update';

const App = () => (
  <Router>
    <Route exact path="/poll/:id" component={Poll} />
    <Route exact path="/poll" component={PollMaker} />
    <Route exact path="/" component={Results} />
    <Route exact path="/polls/:id" component={Update} />
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
