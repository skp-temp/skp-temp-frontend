import React from 'react';
import styled from 'styled-components';
import ItemCategory from './ItemCategory';
import ItemSelectBox from './ItemSelectBox';
import ItemBox from './ItemBox';
import { useOpenSelectBox } from '../../store';

const MyItemComponent = styled.div``;

const ComboBoxComponent = styled.div`
  display: flex;
  margin: 0 18px;
`;

function MyItem() {
  const { setIsOpenSelectBox } = useOpenSelectBox();

  return (
    <MyItemComponent onClick={() => setIsOpenSelectBox(false)}>
      <ItemCategory />
      <ComboBoxComponent>
        <ItemSelectBox />
      </ComboBoxComponent>
      <ItemBox />
    </MyItemComponent>
  );
}

export default MyItem;
