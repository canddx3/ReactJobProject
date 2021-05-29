import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Poll from "./Components/Poll";
import Results from "./Components/Results";
import PollMaker from './Components/PollMaker';

const App = () => (
  <Router>
    <Route exact path="/" component={ Poll } />
    <Route exact path="/poll" component={ PollMaker } />
    <Route exact path="/results" component={ Results } />
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
