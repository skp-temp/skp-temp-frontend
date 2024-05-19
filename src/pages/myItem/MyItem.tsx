import React from 'react';
import styled from 'styled-components';
import ItemCategory from './ItemCategory';
import ItemSelectBox from './ItemSelectBox';

const MyItemComponent = styled.div``;

const ComboBoxComponent = styled.div`
  display: flex;
  margin: 0 18px;
`;

function MyItem() {
  return (
    <MyItemComponent>
      <ItemCategory />
      <ComboBoxComponent>
        <ItemSelectBox />
      </ComboBoxComponent>
    </MyItemComponent>
  );
}

export default MyItem;
