import React from 'react';
import styled from 'styled-components';
import ItemCategory from './ItemCategory';

const MyItemComponent = styled.div``;

function MyItem() {
  return (
    <MyItemComponent>
      <ItemCategory />
    </MyItemComponent>
  );
}

export default MyItem;
