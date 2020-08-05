import React from 'react';

import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Principal from './components/Principal';
import Ecommerce from './components/Ecommerce';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Route exact path="/" component={Principal}/>
      <Route exact path="/Products/:id" component={Ecommerce}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
