import React from "react";
import Home from './Components/Home';
import Provider from './Context/Provider';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="App-main">
      <Provider>
        <Home/>
      </Provider>
    </div>
  );
}

export default App;