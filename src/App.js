import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';


function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route component={ErrorPage} />
       {/* <Route path="/yang" exact component={Yang}/>  */}
     </Switch>
     </BrowserRouter>
  );
}

export default App;
