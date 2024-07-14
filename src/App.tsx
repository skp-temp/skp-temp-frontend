import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Analysis = React.lazy(() => import('./pages/analysis/Analysis'));
const FriendsMain = React.lazy(() => import('./pages/friendsMain/FriendsMain'));
const FriendsInvite = React.lazy(
  () => import('./pages/friendsInvite/FriendsInvite'),
);
const FriendsMessage = React.lazy(
  () => import('./pages/friendsMessage/FriendsMessage'),
);
const MessageGift = React.lazy(
  () => import('./pages/friendsMessage/MessageGift/MessageGift'),
);
const MyItem = React.lazy(() => import('./pages/myItem/MyItem'));
const ItemRandomPick = React.lazy(
  () => import('./pages/myItem/ItemRandomPick/ItemRandomPick'),
);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div></div>}></Route>
          <Route path="/analysis" element={<Analysis />}></Route>
          <Route path="/friendsMain" element={<FriendsMain />}></Route>
          <Route path="/friendsInvite" element={<FriendsInvite />}></Route>
          <Route path="/friendsMessage" element={<FriendsMessage />}></Route>
          <Route path="/friendsMessage/Gift" element={<MessageGift />}></Route>
          <Route path="/myItem" element={<MyItem />}></Route>
          <Route path="/myItem/pick" element={<ItemRandomPick />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
