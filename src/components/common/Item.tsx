import React from 'react';
import styled from 'styled-components';
import { GRAY_COLOR } from '../../constants';

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 98px;
`;

const ItemImageBox = styled.div`
  position: relative;
  margin-top: 24px;
  background-color: ${GRAY_COLOR.GRAY_100};
  border-radius: 12px;
  border-width: 2px;
  width: 98px;
  height: 98px;
`;

const ItemText = styled.div`
  color: ${GRAY_COLOR.GRAY_600};
  margin-top: 8px;
  font-size: 14px;
  font-family: 'PretendardMedium';
  line-height: 14px;
  letter-spacing: -0.4px;
  text-align: center;
`;

const ItemCount = styled.div`
  color: ${GRAY_COLOR.GRAY_400};
  background-color: ${GRAY_COLOR.WHITE};
  position: absolute;
  right: 6px;
  bottom: 6px;
  width: 24px;
  height: 24px;
  font-size: 16px;
  font-family: 'PretendardBold';
  line-height: 24px;
  text-align: center;
  border-radius: 32px;
`;

function ItemComponent(props: { itemName: string; count: number }) {
  return (
    <ItemBox>
      <ItemImageBox>
        {props.count > 1 ? <ItemCount>{props.count}</ItemCount> : null}
      </ItemImageBox>
      <ItemText>{props.itemName}</ItemText>
    </ItemBox>
  );
}

export default ItemComponent;
