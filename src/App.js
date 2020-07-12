import React from 'react';
import './App.css';
import Nabvar from './components/Nabvar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import CreateNewTask from './containers/CreateNewTask';

function App() {
  return (
    <BrowserRouter>
      <Nabvar />
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/create" component={CreateNewTask} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
