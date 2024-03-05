import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperClass } from "swiper/react";
import 'swiper/css';
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

  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass>();

  const handlePrev = () => {
    swiper?.slidePrev()
  }
  const handleNext = () => {
    swiper?.slideNext()
  }

  return (
  <DetailComponent>
    <Swiper
        slidesPerView={1}
        onActiveIndexChange={(e : SwiperClass)=>setSwiperIndex(e.realIndex)}
        onSwiper={(e : SwiperClass) => {setSwiper(e)}}
      >
      <SwiperSlide>
        {CategoryRank1.map(categoryInfo => <CategoryRankItem key={categoryInfo.categoryName} category={categoryInfo}/>)}
      </SwiperSlide>
      <SwiperSlide>
        {CategoryRank2.map(categoryInfo => <CategoryRankItem key={categoryInfo.categoryName} category={categoryInfo}/>)}
      </SwiperSlide>
    </Swiper>
    <CategoryRankPagenation handleslidePrev = {handlePrev} handleslideNext = {handleNext} pageNum={swiperIndex} />
  </DetailComponent>
  )
}

export default CategoryRankDetail;