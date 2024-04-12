import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import inputEmpty from '../../assets/images/friendsInvite/inputEmpty.svg';
import inputActive from '../../assets/images/friendsInvite/inputActive.svg';
import inputDisable from '../../assets/images/friendsInvite/inputDisable.svg';
import close from '../../assets/images/friendsInvite/close.svg';
import { GRAY_COLOR, SEMANTIC_COLOR } from '../../constants';

const FriendsInviteSearchComponent = styled.div``;

const SearchBox = styled.div<{ inputStatus: string }>`
  background-image: url(${(props) => props.inputStatus});
  background-size: 100% 48px;
  height: 48px;
  width: ${document.documentElement.clientWidth - 40}px;
  margin: 12px 24px 0 24px;
  position: absolute;
`;

const SearchInput = styled.input`
  color: ${GRAY_COLOR.GRAY_900};
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
  &::placeholder {
    color: ${GRAY_COLOR.GRAY_400};
  }
`;

const CloseButton = styled.div`
  background-image: url(${close});
  position: relative;
  left: ${document.documentElement.clientWidth - 80}px;
  bottom: 6px;
  height: 16px;
  width: 16px;
`;

function FriendsInviteSearch() {
  const [inputData, setInputData] = useState<string>('');
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const onClearInput = () => {
    setInputData('');
  };

  const calInputStatus = useMemo(() => {
    // 인풋 데이터가 있고, 정규표현식 통과를 못하면 빨간색
    if (inputData && !/^[a-zA-Z0-9]*$/.test(inputData)) {
      return inputDisable;
      // 인풋 데이터가 있거나 포커스되면 파란색, 아니면 회색
    } else if (isFocus || inputData) {
      return inputActive;
    } else return inputEmpty;
  }, [inputData, isFocus]);

  return (
    <FriendsInviteSearchComponent>
      <SearchBox inputStatus={calInputStatus}>
        <SearchInput
          type="text"
          name="username"
          placeholder="사용자 코드 입력하기"
          autoComplete="off"
          value={inputData}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <CloseButton onClick={onClearInput} />
      </SearchBox>
    </FriendsInviteSearchComponent>
  );
}

export default FriendsInviteSearch;
