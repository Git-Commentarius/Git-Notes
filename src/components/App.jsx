import React from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Home from "../views/Home";
import RedirectSuccessful from "../views/Redirect";
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route path="/redirect" component={RedirectSuccessful}></Route>
      </Router>
    </div>
  );
}

export default App;
