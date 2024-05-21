import React from 'react';
import styled from 'styled-components';
import ItemComponent from '../../components/common/ItemComponent';
import { CategoryType } from '../../constants';

const sampleList: {
  itemName: string;
  count: number;
  category: CategoryType;
}[] = [
  { itemName: '무지개 모자', count: 1, category: 'WORKOUT' },
  { itemName: '무지개 모자', count: 2, category: 'WORKOUT' },
  { itemName: '무지개 모자', count: 2, category: 'WORKOUT' },
  { itemName: '무지개 모자', count: 2, category: 'DIET' },
];

const ItemBoxComponent = styled.div`
  margin: 0 23px;
  display: grid;
  grid-template-columns: 98px 98px 98px;
  justify-content: space-between;
`;

function ItemBox() {
  return (
    <ItemBoxComponent>
      {sampleList.map((item, idx) => (
        <ItemComponent
          itemName={item.itemName}
          count={item.count}
          idx={idx}
          category={item.category}
        />
      ))}
    </ItemBoxComponent>
  );
}

export default ItemBox;
