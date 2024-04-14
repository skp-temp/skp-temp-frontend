import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const Analysis = React.lazy(() => import('./pages/analysis/Analysis'));
const FriendsMain = React.lazy(() => import('./pages/friendsMain/FriendsMain'));
const FriendsInvite = React.lazy(
  () => import('./pages/friendsInvite/FriendsInvite'),
);

function App() {
  return (
    <BrowserRouter>
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
