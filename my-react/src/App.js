import React from 'react';
import './App.css';
import {HashRouter  as Hash, Route} from "react-router-dom" ;

import {Vpp} from './src/views/';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Vpp></Vpp> */}
            <Hash 
                basename="/"
            >   
                <Route component={Vpp}/>
            </Hash>
    </div>
  );
}

export default App;
