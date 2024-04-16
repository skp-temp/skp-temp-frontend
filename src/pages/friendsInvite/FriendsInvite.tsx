import React, { useMemo } from 'react';
import styled from 'styled-components';
import FriendsInviteHeader from './FriendsInviteHeader';
import FriendsInviteSearch from './FriendsInviteSearch';
import LargeCTAButton from '../../components/common/LargeCTAButton';
import { useInviteInputData } from '../../store';

const HEADER_STRING = '친구의 사용자 코드가 필요해요.';
const BUTTON_STRING = '친구 요청 보내기';

const FriendsInviteComponent = styled.div`
  padding: 32px 24px 0 24px;
`;

function FriendsInvite() {
  const { inputData } = useInviteInputData();

  const calButtonStatus = useMemo(() => {
    // 인풋 데이터가 있고, 정규표현식 통과하면 흰색
    if (inputData && /^[a-zA-Z0-9]*$/.test(inputData)) {
      return true;
      // 아니면 회색
    } else {
      return false;
    }
  }, [inputData]);

  return (
    <FriendsInviteComponent>
      <FriendsInviteHeader headerText={HEADER_STRING} />
      <FriendsInviteSearch />
      <LargeCTAButton isActive={calButtonStatus} text={BUTTON_STRING} />
    </FriendsInviteComponent>
  );
}

export default FriendsInvite;
