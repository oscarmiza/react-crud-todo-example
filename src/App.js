import React from "react";
import Header from "./components/header";
import Todos from "./components/todos";
import "bootstrap/dist/css/bootstrap.css"
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>

      <Header />
      <Switch>
      <Route exact path="/" component={Todos} />
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
