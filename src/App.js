import React from "react";
import Header from "./components/Header";
import Todos from "./containers/todos";
import Loader from "./components/Loader";
import "bootstrap/dist/css/bootstrap.css"
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from './redux/store'



function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>

      <Header />
      <Switch>
      <Route exact path="/" component={Todos} />
      <Route exact path="/loader" component={Loader} />
      </Switch>
    
      </Provider>
    </BrowserRouter>
  );
}

export default App;
