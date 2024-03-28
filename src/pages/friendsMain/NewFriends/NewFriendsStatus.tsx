import React from 'react';
import styled from 'styled-components';
import miniBubble from '../../../assets/images/friendsMain/miniBubble.svg';
import bigBubble from '../../../assets/images/friendsMain/bigBubble.svg';
import leftBubble from '../../../assets/images/friendsMain/leftBubble.svg';
import rightBubble from '../../../assets/images/friendsMain/rightBubble.svg';

const NewFriendsStatusComponent = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
`;

const MiniBubble = styled.div`
  background-image: url(${miniBubble});
  background-size: cover;
  width: 4px;
  height: 32px;
  margin-right: 2px;
`;

const BigBubble = styled.div`
  background-image: url(${bigBubble});
  background-size: cover;
  width: 4px;
  height: 32px;
  margin-right: 2px;
`;

const LeftBubble = styled.div`
  background-image: url(${leftBubble});
  background-size: cover;
  width: 6px;
  height: 28px;
`;

const RightBubble = styled.div`
  background-image: url(${rightBubble});
  background-size: cover;
  width: 6px;
  height: 28px;
`;

const BubbleComponent = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6fa;
  height: 28px;
`;

const CategoryImage = styled.div<{ $categoryName: string }>`
  background-image: url('images/analysis/${(props) =>
    props.$categoryName}.svg');
  background-size: cover;
  width: 16px;
  height: 16px;
  margin: 0 1px;
`;

function NewFriendsStatus(props: { item: string[] }) {
  return (
    <NewFriendsStatusComponent>
      <MiniBubble />
      <BigBubble />
      <LeftBubble />
      <BubbleComponent>
        {props.item.map((i, idx) => (
          <CategoryImage key={idx} $categoryName={i} />
        ))}
      </BubbleComponent>
      <RightBubble />
    </NewFriendsStatusComponent>
  );
}

export default NewFriendsStatus;
