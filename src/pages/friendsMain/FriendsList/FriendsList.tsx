import React from "react";
import styled from "styled-components";
import FriendsMainHeader from "../../../components/friendsMain/FriendsMainHeader";

const HEADER_STRING: string = '친구 목록';

const FriendsListComponent = styled.div`
  padding: 16px;
`

function FriendsList() {
  return (
    <FriendsListComponent>
      <FriendsMainHeader headerString={HEADER_STRING} counts={1} />
    </FriendsListComponent>
  )
}

export default FriendsList;