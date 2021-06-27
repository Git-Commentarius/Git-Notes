import React from "react";
import { Route, BrowserRouter as Router, HashRouter } from "react-router-dom";
import Home from "./views/Home";
import RedirectSuccessful from "./views/Redirect";
function App() {
  return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Home}></Route>
        <Route path={process.env.PUBLIC_URL + "/redirect"} component={RedirectSuccessful}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
