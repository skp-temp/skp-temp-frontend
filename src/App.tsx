import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import GlobalFont from './styles/GlobalFont';
import Analysis from './pages/analysis/Analysis';
import FriendsMain from './pages/friendsMain/FriendsMain';
import FriendsInvite from './pages/friendsInvite/FriendsInvite';

function App() {
  return (
    <BrowserRouter>
      <GlobalFont />
      <Routes>
        <Route path="/" element={<div></div>}></Route>
        <Route path="/analysis" element={<Analysis />}></Route>
        <Route path="/friendsMain" element={<FriendsMain />}></Route>
        <Route path="/friendsInvite" element={<FriendsInvite />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
