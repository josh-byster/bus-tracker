import React from 'react';
import * as Sentry from '@sentry/browser';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import HomePage from './pages/HomePage';
import TrackingPage from './pages/TrackingPage';
import BusNavbar from './components/BusNavbar';
import LogRocket from 'logrocket';
if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-109186351-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  Sentry.init({
    dsn: 'https://a3cd776e555b4f62b9215dee5e11a886@sentry.io/306037',
  });

  LogRocket.init('oh67gs/uiucbus');

  LogRocket.getSessionURL((sessionURL) => {
    Sentry.configureScope((scope) => {
      scope.setExtra('sessionURL', sessionURL);
    });
  });
  window.addEventListener('offline', function (e) {
    console.log('Not connected to LAN');
  });

  window.addEventListener('online', function (e) {
    console.log('Connected back on LAN');
  });
}
function App() {
  return (
    <Router>
      <div>
        <BusNavbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/track/:id" component={TrackingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
