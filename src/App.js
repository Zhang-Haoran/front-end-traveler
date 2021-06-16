import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HaoranPage from "./pages/HaoranPage/HaoranPage";
import KyriePage from './pages/KyriePage/KyriePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/haoran" exact component={HaoranPage} />
        <Route path="/kyrie" exact component={KyriePage} />
        {/* <Route path="/yang" exact component={Yang}/>  */}
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
