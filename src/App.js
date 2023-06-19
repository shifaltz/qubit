import React from 'react';
import Routes from "./routes";
import { GlobalStyle } from "./style/global";
import Favicon from 'react-favicon';


function App() {
  return (
    <div className="App">
      <Favicon url="assets/logos/qubit_marca_final_cor.png"/>
      <Routes/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
