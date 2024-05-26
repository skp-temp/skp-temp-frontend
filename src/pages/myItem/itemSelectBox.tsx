import React from 'react';
import styled from 'styled-components';
import { useComboBox, useOpenSelectBox } from '../../store';
import ArrowDown from '../../assets/images/myItem/ArrowDown.svg';
import {
  SELECT_OPTION_LIST,
  GRAY_COLOR,
  SEMANTIC_COLOR,
} from '../../constants';

const ItemSelectBoxComponent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ComboBox = styled.div`
  display: flex;
`;

const ComboBoxItem = styled.div`
  color: ${GRAY_COLOR.GRAY_800};
  font-size: 14px;
  font-family: 'PretendardMedium';
  line-height: 16px;
  letter-spacing: -0.4px;
  min-width: 65px;
`;

const ArrowDownImage = styled.div`
  background-image: url(${ArrowDown});
  background-size: cover;
  width: 16px;
  height: 16px;
`;

const OptionListBox = styled.div`
  overflow: hidden;
  transition: 0.1s ease-in;
  position: absolute;
  z-index: 1;
`;

const OptionList = styled.ul`
  width: 120px;
  list-style: none;
  border: 1px solid ${GRAY_COLOR.BLACK};
  box-sizing: border-box;
  border-radius: 10px;
  padding: 8.5px 10px;
  margin: 11px 0;
  background-color: ${GRAY_COLOR.WHITE};
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

const CountBox = styled.div`
  color: ${SEMANTIC_COLOR.BLUE};
  font-size: 14px;
  font-family: 'PretendardMedium';
  line-height: 16px;
  letter-spacing: -0.4px;
`;

function ItemSelectBox() {
  const { comboBox, setComboBox } = useComboBox();
  const { isOpenSelectBox, setIsOpenSelectBox } = useOpenSelectBox();

  const onClickArrow = (e: React.MouseEvent) => {
    setIsOpenSelectBox(true);
    e.stopPropagation();
  };

  const onClickOption = (option: string) => {
    setComboBox(option);
    setIsOpenSelectBox(false);
  };
  return (
    <ItemSelectBoxComponent>
      <div>
        <ComboBox onClick={onClickArrow}>
          <ComboBoxItem>{comboBox}</ComboBoxItem>
          <ArrowDownImage />
        </ComboBox>
        <OptionListBox style={{ height: isOpenSelectBox ? '128px' : '0px' }}>
          <OptionList>
            {SELECT_OPTION_LIST.map((item) => (
              <OptionItem key={item} onClick={() => onClickOption(item)}>
                {item}
              </OptionItem>
            ))}
          </OptionList>
        </OptionListBox>
      </div>
      <CountBox>30개</CountBox>
    </ItemSelectBoxComponent>
  );
}

export default ItemSelectBox;
