import React, { useState } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';
import './App.scss';
import Header from './components/header/header.component';
import Home from './components/home/home.component';
import './factories/campaign.factory';

import { data } from './services/campaign.service'

function App() {
  useState(() => {
    window.localStorage.setItem('campaignData', JSON.stringify(data));
  })

  return (
    <Provider store={store}>
      <div className="app">
        <Header/>
        <div className="app-container">
          <Home/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
