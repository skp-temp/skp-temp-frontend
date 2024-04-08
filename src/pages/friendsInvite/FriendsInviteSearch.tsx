import React from 'react';
import styled from 'styled-components';
import inputEmpty from '../../assets/images/friendsInvite/inputEmpty.svg';
import inputActive from '../../assets/images/friendsInvite/inputActive.svg';
import inputDisable from '../../assets/images/friendsInvite/inputDisable.svg';
import close from '../../assets/images/friendsInvite/close.svg';

const FriendsInviteSearchComponent = styled.div``;

const SearchBox = styled.div`
  background-image: url(${inputEmpty});
  height: 16px;
  padding: 16px;
  width: 280px;
`;

const SearchInput = styled.input`
  height: 16px;
  padding: 0;
  border: 0;
`;

function FriendsInviteSearch() {
  return (
    <FriendsInviteSearchComponent>
      <SearchBox>
        <SearchInput type="text" name="username" />
      </SearchBox>
    </FriendsInviteSearchComponent>
  );
}

export default FriendsInviteSearch;
