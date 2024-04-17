import React from 'react';
import styled from 'styled-components';
import { useMessageFocus } from '../../store';
import { GRAY_COLOR } from '../../constants';

const FriendsMessageHeaderComponent = styled.div`
  padding: 32px 16px 0 16px;
`;

const HeaderComponent = styled.div<{ $isNone: string }>`
  padding-bottom: 32px;
  display: ${(props) => props.$isNone};
`;

const NameComponent = styled.div`
  color: ${GRAY_COLOR.GRAY_500};
  font-size: 16px;
  font-family: 'PretendardMedium';
  line-height: 16px;
  letter-spacing: -0.4px;
`;

const GoalComponent = styled.div`
  display: flex;
  align-items: center;
  width: auto;
`;

const GoalText = styled.div`
  color: ${GRAY_COLOR.GRAY_900};
  font-size: 20px;
  font-family: 'PretendardBold';
  line-height: 20px;
`;

const GoalImage = styled.div`
  background-image: url(images/analysis/workout.svg);
  background-size: cover;
  width: 32px;
  height: 32px;
  margin-left: 8px;
`;

function FriendsMessageHeader() {
  const { isFocus } = useMessageFocus();

  return (
    <FriendsMessageHeaderComponent>
      <HeaderComponent $isNone={isFocus ? 'none' : 'block'}>
        <NameComponent>하민님의 목표</NameComponent>
        <GoalComponent>
          <GoalText>나는 건강짱이 될거야!</GoalText>
          <GoalImage />
        </GoalComponent>
      </HeaderComponent>
    </FriendsMessageHeaderComponent>
  );
}

export default FriendsMessageHeader;
