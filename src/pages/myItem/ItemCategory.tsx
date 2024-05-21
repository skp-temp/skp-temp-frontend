import React from 'react';
import styled from 'styled-components';
import { GRAY_COLOR, CATEGORY_LIST } from '../../constants';

const ItemCategoryComponent = styled.div`
  display: flex;
  padding: 16px 14px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const CategoryBox = styled.div`
  background-color: ${GRAY_COLOR.GRAY_200};
  border-radius: 4px;
  padding: 4px 8px;
  margin: 0 2px;
  word-wrap: break-word;
`;

const TextBox = styled.div`
  color: ${GRAY_COLOR.GRAY_500};
  font-size: 12px;
  font-family: 'PretendardMedium';
  line-height: 12px;
  letter-spacing: -0.4px;
  white-space: nowrap;
`;

function ItemCategory() {
  return (
    <ItemCategoryComponent>
      {Object.values(CATEGORY_LIST).map((item) => (
        <CategoryBox key={item}>
          <TextBox>{item}</TextBox>
        </CategoryBox>
      ))}
    </ItemCategoryComponent>
  );
}

export default ItemCategory;
