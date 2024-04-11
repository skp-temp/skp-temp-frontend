import React, { useState } from 'react';
import styled from 'styled-components';
import inputEmpty from '../../assets/images/friendsInvite/inputEmpty.svg';
import inputActive from '../../assets/images/friendsInvite/inputActive.svg';
import inputDisable from '../../assets/images/friendsInvite/inputDisable.svg';
import close from '../../assets/images/friendsInvite/close.svg';
import { GRAY_COLOR, SEMANTIC_COLOR } from '../../constants';

const FriendsInviteSearchComponent = styled.div``;

const SearchBox = styled.div<{ inputStatus: string }>`
  background-image: url(${(props) => props.inputStatus});
  background-size: 100% 56px;
  height: 56px;
  width: ${document.documentElement.clientWidth - 40}px;
  margin: 12px 20px 0 20px;
  position: absolute;
`;

const SearchInput = styled.input`
  color: ${GRAY_COLOR.GRAY_400};
  position: relative;
  left: 20px;
  top: 12px;
  height: 16px;
  font-size: 16px;
  font-family: 'PretendardRegular';
  line-height: 16px;
  word-wrap: break-word;
  background-color: transparent;
  padding: 0;
  border: none;
  outline: none;
  caret-color: ${SEMANTIC_COLOR.BLUE};
  caret-width: 2px;
  &::placeholder {
    color: ${GRAY_COLOR.GRAY_400};
  }
`;

function FriendsInviteSearch() {
  const [inputData, setInputData] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <FriendsInviteSearchComponent>
      <SearchBox inputStatus={inputEmpty}>
        <SearchInput
          type="text"
          name="username"
          placeholder="사용자 코드 입력하기"
          autoComplete="off"
          value={inputData}
          onChange={onChange}
        />
      </SearchBox>
    </FriendsInviteSearchComponent>
  );
}

export default FriendsInviteSearch;
