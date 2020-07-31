import React from 'react';

import './App.css';
import Cuerpo from './components/Cuerpo';
import Header from './components/Header';
import About from './components/About';
import Team from './components/Team';
import Partners from './components/Partners';

function App() {
  return (
    <div class="Fondo">
      <Header></Header>
      <div style={{width:"100%",height:"140px"}}></div>
      <Cuerpo></Cuerpo>
      <Team></Team>
      <Partners></Partners>
      <About></About>
      
      
    </div>
  );
}

export default App;
