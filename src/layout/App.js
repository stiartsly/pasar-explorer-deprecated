import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <Main>
      <Router>
        <Navbar />
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact}>
              <route.body />
            </Route>
          ))}
        </Switch>
        <Footer />
      </Router>
    </Main>
  );
}

export default App;
