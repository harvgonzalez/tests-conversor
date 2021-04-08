import React, { useEffect } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';


function App() {

  useEffect(() => {
    fetch(API_KEY)
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])
  return (
    <div className="App">
      <h1>Convert</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </div>
  );
}

export default App;
