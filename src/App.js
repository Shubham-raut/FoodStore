import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import Main from './pages/Main/Main';

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
