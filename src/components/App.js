import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from '../containers/Products';
import History from '../containers/History';
import Header from '../containers/Header';
import '../styles.scss';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/historial">Historial</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/historial">
              <History />
            </Route>
            <Route path="/">
              <Products />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}