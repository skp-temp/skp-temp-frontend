import React from 'react';
import styled from 'styled-components';

const FriendsAlbumStatusComponent = styled.div``;

const CategoryImage = styled.div<{ $categoryName: string }>`
  background-image: url('images/analysis/${(props) =>
    props.$categoryName}.svg');
  background-size: cover;
  width: 16px;
  height: 16px;
  margin: 0 1px;
`;

function FriendsAlbumStatus(props: { item: string[] }) {
  return (
    <FriendsAlbumStatusComponent>
      {props.item.map((i, idx) => (
        <CategoryImage key={idx} $categoryName={i} />
      ))}
    </FriendsAlbumStatusComponent>
  );
}

export default FriendsAlbumStatus;
