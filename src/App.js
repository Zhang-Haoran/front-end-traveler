import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HaoranPage from "./pages/HaoranPage/HaoranPage";
import KyriePage from './pages/KyriePage/KyriePage';
import BobPage from './pages/BobPage';
import ElbertPage from './pages/ElbertPage';
import NanPage from "./pages/NanPage/NanPage";
import YangPage from './pages/YangPage/YangPage';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/haoran" exact component={HaoranPage} />
        <Route path="/kyrie" exact component={KyriePage} />
        <Route path="/Bob" exact component={BobPage} />
        <Route path="/Nan" exact component={NanPage} />
        <Route path="/yang" exact component={YangPage}/>
        <Route path="/elbert" exact component={ElbertPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
