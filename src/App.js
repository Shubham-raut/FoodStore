import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import store, { configureStore } from './redux/store';
// import configureStore from './redux/store';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Main from './pages/Main/Main';
import RestaurentDetails from './pages/RestaurentDetails/RestaurentDetails';
import ProtectedRoute from './routes/ProtectedRoute';
import Payment from './pages/Payment/Payment';
import Login from './components/Login/Login';
import About from './pages/About/About';
import Help from './pages/Help/Help';
import MyAccount from './pages/MyAccount/MyAccount';

function App() {

  configureStore();
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/Restaurants" component={Main} />
          <Route path="/Restaurants:id" component={RestaurentDetails} />
          <ProtectedRoute path="/Payment" component={Payment} />
          <ProtectedRoute path="/MyAccount" component={MyAccount} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
          <Route exact path="*" component={LandingPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
