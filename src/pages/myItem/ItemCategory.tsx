import React from 'react';
import styled from 'styled-components';
import { useCategorySelect } from '../../store';
import {
  GRAY_COLOR,
  CATEGORY_LIST,
  CATEGORY_OBJECT,
  THEME_COLOR,
} from '../../constants';

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

const CategoryBox = styled.div<{ $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
  border-radius: 4px;
  padding: 4px 8px;
  margin: 0 2px;
  word-wrap: break-word;
`;

const TextBox = styled.div<{ $color: string }>`
  color: ${(props) => props.$color};
  font-size: 12px;
  font-family: 'PretendardMedium';
  line-height: 12px;
  letter-spacing: -0.4px;
  white-space: nowrap;
`;

function ItemCategory() {
  const { categorySelect, setCategorySelect } = useCategorySelect();

  const onClickCategory = (item: string) => {
    if (categorySelect.includes(item)) {
      setCategorySelect(categorySelect.filter((i) => i !== item));
    } else setCategorySelect([...categorySelect, item]);
  };

  return (
    <ItemCategoryComponent>
      {CATEGORY_LIST.map((item) => (
        <CategoryBox
          onClick={() => onClickCategory(item)}
          $bgColor={
            categorySelect.includes(item)
              ? THEME_COLOR[item][200]
              : GRAY_COLOR.GRAY_200
          }
          key={item}
        >
          <TextBox
            $color={
              categorySelect.includes(item)
                ? THEME_COLOR[item][400]
                : GRAY_COLOR.GRAY_500
            }
          >
            {CATEGORY_OBJECT[item]}
          </TextBox>
        </CategoryBox>
      ))}
    </ItemCategoryComponent>
  );
}

export default ItemCategory;
