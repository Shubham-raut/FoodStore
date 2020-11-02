import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import store, { configureStore } from './redux/store';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Main from './pages/Main/Main';
import RestaurentDetails from './pages/RestaurentDetails/RestaurentDetails';
import ProtectedRoute from './routes/ProtectedRoute';
import Login from './pages/Login/Login';
import Checkout from './pages/Checkout/Checkout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
function App() {

  configureStore();
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/restaurants" component={Main} />
          <Route exact path="/restaurants/restaurant/:resId" component={RestaurentDetails} />
          <ProtectedRoute exact path="/Checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="*" component={NotFoundPage} />
          {/* <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" /> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
