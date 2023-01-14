import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/organisms/Header/Header';
import HomePage from './pages/HomePage';

import Routers from './Routers';

function App() {
  return <Routers />;
}

export default App;
