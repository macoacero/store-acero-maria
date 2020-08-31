import React from 'react';
import '../styles.scss';
import Products from '../containers/Products';
import History from '../containers/History';
import Header from '../containers/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Header />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/historial">historial</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/">
              <Products />
            </Route>
            <Route path="/historial">
              <History />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
