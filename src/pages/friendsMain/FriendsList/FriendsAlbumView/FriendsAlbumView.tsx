import React from 'react';
import styled from 'styled-components';
import FriendsAlbumItem from './FriendsAlbumItem';

interface FriendsListType {
  name: string;
  badge: string;
  makingItem?: string[];
}

const TmpFriendsList: FriendsListType[] = [
  {
    name: '강동훈',
    badge: '치어리더',
  },
  {
    name: '강동훈',
    badge: '',
    makingItem: ['workout', 'workout', 'study'],
  },
  {
    name: '강동훈',
    badge: '',
    makingItem: ['workout', 'workout', 'study'],
  },
  {
    name: '강동훈',
    badge: '치어리더',
    makingItem: ['workout', 'workout', 'study'],
  },
];

const FriendsAlbumViewComponent = styled.div`
  display: grid;
  grid-template-columns: 158px 158px;
  justify-content: space-between;
`;

function FriendsAlbumView() {
  return (
    <FriendsAlbumViewComponent>
      {TmpFriendsList.map((i, idx) => (
        <FriendsAlbumItem key={idx} name={i.name} badge={i.badge} />
      ))}
    </FriendsAlbumViewComponent>
  );
}

export default FriendsAlbumView;
