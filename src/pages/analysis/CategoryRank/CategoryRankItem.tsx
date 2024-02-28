import React from "react";
import styled from "styled-components";
import { categoryInfo } from "./CategoryRankDetail";

const ItemComponent =  styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 14px;
  align-items: center;
`
const CategoryImage = styled.div<{ $categoryName: string }>`
  background-image: url('images/analysis/${props => props.$categoryName}.svg');
  background-size: cover;
  width: 24px;
  height: 24px;
  margin-right: 6px;
`
const CategoryText = styled.div`
  width: 48px;
  font-size: 14px;
  font-family: "PretendardRegular";
`
const CategoryGraph = styled.div`
`
const CategoryCount = styled.div`
  font-size: 14px;
  font-family: "PretendardRegular";
  margin-left: 8px;
`

function CategoryRankItem(props: {category:categoryInfo}) {
  return (
    <ItemComponent>
      <CategoryImage $categoryName={props.category.categoryName} />
      <CategoryText>{props.category.categoryNameKr}</CategoryText>
      <CategoryGraph />
      <CategoryCount>{props.category.categoryCount}</CategoryCount>
    </ItemComponent>
  )
}

export default CategoryRankItem;