import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ModalComponent from '../../components/common/ModalComponent';
import ItemComponent from '../../components/common/ItemComponent';
import { useIsOpenModal, useComboBox, useCategorySelect } from '../../store';
import { CategoryType } from '../../constants';

interface ListType {
  itemName: string;
  count: number;
  category: CategoryType;
  type: string;
}

const sampleList: ListType[] = [
  { itemName: '무지개 모자1', count: 1, category: 'WORKOUT', type: '소품' },
  { itemName: '무지개 모자2', count: 2, category: 'WORKOUT', type: '의상' },
  { itemName: '무지개 모자3', count: 2, category: 'WORKOUT', type: '의상' },
  { itemName: '무지개 모자4', count: 2, category: 'DIET', type: '악세서리' },
];

const MODAL_WIDTH = 280;
const MODAL_HEIGHT = 416;

const ItemBoxComponent = styled.div`
  margin: 0 23px;
  display: grid;
  grid-template-columns: 98px 98px 98px;
  justify-content: space-between;
`;

function ItemBox() {
  const { isOpenModal, setIsOpenModal } = useIsOpenModal();
  const { comboBox } = useComboBox();
  const { categorySelect } = useCategorySelect();
  const [list, setList] = useState(sampleList);

  useEffect(() => {
    if (comboBox === '모든 아이템')
      setList(
        sampleList.filter((item) => categorySelect.includes(item.category)),
      );
    else
      setList(
        sampleList.filter(
          (item) =>
            item.type === comboBox && categorySelect.includes(item.category),
        ),
      );
  }, [comboBox, categorySelect]);

  return (
    <>
      <ItemBoxComponent>
        {list.map((item, idx) => (
          <ItemComponent
            itemName={item.itemName}
            count={item.count}
            idx={idx}
            category={item.category}
            key={item.itemName}
            clickItem={() => setIsOpenModal(idx + 1)}
          />
        ))}
      </ItemBoxComponent>
      {isOpenModal > 0 && (
        <ModalComponent
          title={list[isOpenModal - 1].itemName}
          category={list[isOpenModal - 1].category}
          type={list[isOpenModal - 1].type}
          count={list[isOpenModal - 1].count}
          ModalWidth={MODAL_WIDTH}
          ModalHeight={MODAL_HEIGHT}
        />
      )}
    </>
  );
}

export default ItemBox;
