import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Poll from "./Components/Polls";
import Results from "./Components/Results";

const App = () => (
  <Router>
    <Route exact path="/" component={ Poll } />
    <Route exact path="/results" component={ Results } />
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
