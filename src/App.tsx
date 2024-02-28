import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import GlobalFont from './styles/GlobalFont';
import Analysis from './pages/analysis/Analysis'

function App() {
  return (
    <BrowserRouter>
      <GlobalFont/>
      <Routes>
        <Route path='/' element={<div></div>}></Route>
        <Route path='/analysis' element={<Analysis/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
