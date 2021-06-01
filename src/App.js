// import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import {GlobalStyles} from './GlobalStyles.style'
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
// import "tailwindcss/tailwind.css"


function App(){
  return (

    <div className="App">
    <GlobalStyles/>
      <Router>
        <Route path="/" exact component={Join}/>
        <Route path="/chat" component={Chat}/>
      </Router>
    </div>
  )

  };

export default App;