import React from 'react';
import styled from 'styled-components';
import { useComboBox } from '../../store';
import { SELECT_OPTION_LIST, GRAY_COLOR } from '../../constants';

const ItemSelectBoxComponent = styled.div``;

const ComboBox = styled.div`
  color: ${GRAY_COLOR.GRAY_800};
  font-size: 14px;
  font-family: 'PretendardMedium';
  line-height: 14px;
  letter-spacing: -0.4px;
`;

const OptionList = styled.ul`
  width: 120px;
  list-style: none;
  border: 1px solid ${GRAY_COLOR.BLACK};
  box-sizing: border-box;
  border-radius: 10px;
  padding: 8.5px 10px;
  margin: 11px 0;
`;

const OptionItem = styled.li`
  border: none;
  color: ${GRAY_COLOR.GRAY_500};
  font-size: 12px;
  font-family: 'PretendardMedium';
  line-height: 12px;
  letter-spacing: -0.4px;
  margin: 1.5px 0;
  padding: 4px 8px;
  text-align: center;
  box-sizing: border-box;
`;

function ItemSelectBox() {
  const { comboBox, setComboBox } = useComboBox();
  return (
    <ItemSelectBoxComponent>
      <ComboBox>{comboBox}</ComboBox>
      <OptionList>
        {SELECT_OPTION_LIST.map((item) => (
          <OptionItem key={item}>{item}</OptionItem>
        ))}
      </OptionList>
    </ItemSelectBoxComponent>
  );
}

export default ItemSelectBox;
