import React from "react";
import { Route, BrowserRouter as Router, HashRouter } from "react-router-dom";
import Home from "./views/Home";
import RedirectSuccessful from "./views/Redirect";
function App() {
  return (
    <div>
      <HashRouter>
        <Route exact path="/" component={Home}></Route>
        <Route path="/redirect" component={RedirectSuccessful}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
