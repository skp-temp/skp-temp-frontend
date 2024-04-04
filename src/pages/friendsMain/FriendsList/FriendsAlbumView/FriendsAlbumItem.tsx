import React from 'react';
import styled from 'styled-components';
import tmpImage from '../../../../assets/images/friendsMain/tmpImage.png';
import { GRAY_COLOR } from '../../../../constants';

const FriendsAlbumItemComponent = styled.div`
  display: flex;
  justify-content: center;
  width: 140px;
  height: 156px;
  background-color: ${GRAY_COLOR.GRAY_150};
  border-radius: 16px;
  padding: 52px 9px 12px 9px;
  margin: 16px 0px 4px 0px;
`;

const ProfileBubble = styled.div``;

const ItemComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 76px;
`;

const ImageComponent = styled.div`
  width: 76px;
  height: 112px;
  background-image: url(${tmpImage});
  background-size: cover;
  margin-bottom: 10px;
`;

const NameComponent = styled.div`
  color: #1e1e1e;
  font-size: 14px;
  font-family: 'PretendardRegular';
  line-height: 14px;
  word-wrap: break-word;
  margin-bottom: 6px;
`;

const BadgeComponent = styled.div`
  color: ${GRAY_COLOR.GRAY_500};
  font-size: 12px;
  font-family: 'PretendardRegular';
  line-height: 12px;
  word-wrap: break-word;
`;

function FriendsAlbumItem(props: { name: string; badge: string }) {
  return (
    <FriendsAlbumItemComponent>
      <ProfileBubble />
      <ItemComponent>
        <ImageComponent />
        <NameComponent>{props.name}</NameComponent>
        <BadgeComponent>{props.badge}</BadgeComponent>
      </ItemComponent>
    </FriendsAlbumItemComponent>
  );
}

export default FriendsAlbumItem;
