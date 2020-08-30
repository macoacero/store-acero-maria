import React from 'react';
import '../styles.scss';
import Products from '../containers/Products';
import Header from '../containers/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
