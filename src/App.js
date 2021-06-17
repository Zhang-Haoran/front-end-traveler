import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HaoranPage from "./pages/HaoranPage/HaoranPage";
import KyriePage from './pages/KyriePage/KyriePage';
import BobPage from './pages/BobPage';
<<<<<<< HEAD
import NanPage from "./pages/NanPage/NanPage";
||||||| d1b5c05
=======
import YangPage from './pages/YangPage/YangPage';
>>>>>>> 9cfd6f8bb0fc13a09f0b50ebdb0df3333bb5a9f5

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
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
