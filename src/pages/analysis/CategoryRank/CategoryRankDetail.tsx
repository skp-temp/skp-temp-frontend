import React, { useState } from "react";
import styled from "styled-components";
import CategoryRankItem from "./CategoryRankItem";
import CategoryRankPagenation from "./CategoryRankPagenation";

export interface categoryInfo {
  categoryName: string;
  categoryNameKr: string;
  categoryCount: number;
}

const CategoryRank1: categoryInfo[] = [
  { 
    categoryName: 'workout',
    categoryNameKr: '운동',
    categoryCount: 0
  }, 
  { 
    categoryName: 'money',
    categoryNameKr: '금전',
    categoryCount: 0
  },
  { 
    categoryName: 'diet',
    categoryNameKr: '식습관',
    categoryCount: 0
  },
  { 
    categoryName: 'beauty',
    categoryNameKr: '뷰티',
    categoryCount: 0
  }
]

const CategoryRank2: categoryInfo[] = [
  { 
    categoryName: 'happiness',
    categoryNameKr: '행복',
    categoryCount: 0
  }, 
  { 
    categoryName: 'study',
    categoryNameKr: '공부',
    categoryCount: 0
  },
  { 
    categoryName: 'hustle',
    categoryNameKr: '갓생',
    categoryCount: 0
  },
  { 
    categoryName: 'pet',
    categoryNameKr: '반려',
    categoryCount: 0
  }
]

const DetailComponent = styled.div`
  background: white;
  width: auto;
  height: 178px;
  border-radius: 16px;
  padding: 30px 27px 16px 27px;
`

function CategoryRankDetail() {

  const [pageNum, setPageNum] = useState<number>(1);

  const handlePageNum = () => {
    if (pageNum === 1) {
      setPageNum(2);
    } else {
      setPageNum(1);
    }
  };

  return (
    <DetailComponent>
      {pageNum === 1
      ? CategoryRank1.map(categoryInfo => <CategoryRankItem key={categoryInfo.categoryName} category={categoryInfo}/>)
      : CategoryRank2.map(categoryInfo => <CategoryRankItem key={categoryInfo.categoryName} category={categoryInfo}/>)
      }
      <CategoryRankPagenation handlePageNum = {handlePageNum} />
    </DetailComponent>
  )
}

export default CategoryRankDetail;