import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperClass } from 'swiper/react';
import CategoryRankItem from './CategoryRankItem';
import AnalysisPagenation from '../../../components/analysis/AnalysisPagenation';
import { GRAY_COLOR } from '../../../constants';

export interface categoryInfo {
  rank: number;
  categoryName: string;
  categoryNameKr: string;
  categoryCount: number;
}

const CategoryRank1: categoryInfo[] = [
  {
    rank: 1,
    categoryName: 'workout',
    categoryNameKr: '운동',
    categoryCount: 100,
  },
  {
    rank: 2,
    categoryName: 'money',
    categoryNameKr: '금전',
    categoryCount: 22,
  },
  {
    rank: 3,
    categoryName: 'diet',
    categoryNameKr: '식습관',
    categoryCount: 12,
  },
  {
    rank: 4,
    categoryName: 'beauty',
    categoryNameKr: '뷰티',
    categoryCount: 6,
  },
];

const CategoryRank2: categoryInfo[] = [
  {
    rank: 5,
    categoryName: 'happiness',
    categoryNameKr: '행복',
    categoryCount: 3,
  },
  {
    rank: 6,
    categoryName: 'study',
    categoryNameKr: '공부',
    categoryCount: 3,
  },
  {
    rank: 7,
    categoryName: 'hustle',
    categoryNameKr: '갓생',
    categoryCount: 2,
  },
  {
    rank: 8,
    categoryName: 'pet',
    categoryNameKr: '반려',
    categoryCount: 0,
  },
];

const DetailComponent = styled.div`
  background: ${GRAY_COLOR.WHITE};
  width: auto;
  height: 178px;
  border-radius: 16px;
  padding: 30px 0 16px 0;
`;

function CategoryRankDetail() {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [maxCount, setMaxCount] = useState<number>(0);

  const handlePrev = () => {
    swiper?.slidePrev();
  };
  const handleNext = () => {
    swiper?.slideNext();
  };

  useEffect(() => {
    let result: number = 0;
    CategoryRank1.map((i) => (result = Math.max(i.categoryCount, result)));
    CategoryRank2.map((i) => (result = Math.max(i.categoryCount, result)));
    setMaxCount(result);
  }, []);

  return (
    <DetailComponent>
      <Swiper
        slidesPerView={1}
        onActiveIndexChange={(e: SwiperClass) => setSwiperIndex(e.realIndex)}
        onSwiper={(e: SwiperClass) => {
          setSwiper(e);
        }}
      >
        <SwiperSlide>
          {CategoryRank1.map((categoryInfo) => (
            <CategoryRankItem
              key={categoryInfo.categoryName}
              category={categoryInfo}
              maxCount={maxCount}
            />
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {CategoryRank2.map((categoryInfo) => (
            <CategoryRankItem
              key={categoryInfo.categoryName}
              category={categoryInfo}
              maxCount={maxCount}
            />
          ))}
        </SwiperSlide>
      </Swiper>
      <AnalysisPagenation
        handleslidePrev={handlePrev}
        handleslideNext={handleNext}
        nowPageNum={swiperIndex}
        maxPageNum={2}
      />
    </DetailComponent>
  );
}

export default CategoryRankDetail;
