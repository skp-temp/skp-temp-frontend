import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperClass } from 'swiper/react';
import AnalysisNullComponent from '../../../components/analysis/AnalysisNullComponent';
import CheeringMeDetail from './CheeringMeDetail';
import AnalysisPagenation from '../../../components/analysis/AnalysisPagenation';
import { nullVariable } from '../WeeklySummary/SummaryDetail';
import { RankItemParam } from '../../../components/analysis/RankItems';
import { GRAY_COLOR } from '../../../constants';

const PARAMS: nullVariable = {
  marginTop: 0,
  marginBottom: 22,
  text: '아직 친구가 없어요.',
};

const DetailComponent = styled.div`
  background: ${GRAY_COLOR.WHITE};
  width: auto;
  height: auto;
  border-radius: 16px;
  padding: 28px 22px 16px 22px;
`;

const tmpList: RankItemParam[][] = [
  [
    {
      imageUrl: 'aa',
      name: '김혜민',
      rank: 1,
      counts: 16,
    },
    {
      imageUrl: 'aa',
      name: '최영진',
      rank: 2,
      counts: 15,
    },
    {
      imageUrl: 'aa',
      name: '강동훈',
      rank: 3,
      counts: 8,
    },
  ],
  [
    {
      imageUrl: 'aa',
      name: '김혜민',
      rank: 4,
      counts: 7,
    },
    {
      imageUrl: 'aa',
      name: '최영진',
      rank: 5,
      counts: 6,
    },
    {
      imageUrl: 'aa',
      name: '강동훈',
      rank: 6,
      counts: 5,
    },
  ],
  [
    {
      imageUrl: 'aa',
      name: '김혜민',
      rank: 7,
      counts: 4,
    },
    {
      imageUrl: 'aa',
      name: '최영진',
      rank: 8,
      counts: 3,
    },
    {
      rank: 9,
    },
  ],
];

function CheeringMeComponent() {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass>();

  const handlePrev = () => {
    swiper?.slidePrev();
  };
  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <DetailComponent>
      {/* <AnalysisNullComponent param={PARAMS} /> */}
      <Swiper
        slidesPerView={1}
        onActiveIndexChange={(e: SwiperClass) => setSwiperIndex(e.realIndex)}
        onSwiper={(e: SwiperClass) => {
          setSwiper(e);
        }}
      >
        {tmpList.map((i, idx) => (
          <SwiperSlide key={idx}>
            <CheeringMeDetail rankItem={i} />
          </SwiperSlide>
        ))}
      </Swiper>
      <AnalysisPagenation
        handleslidePrev={handlePrev}
        handleslideNext={handleNext}
        nowPageNum={swiperIndex}
        maxPageNum={3}
      />
    </DetailComponent>
  );
}

export default CheeringMeComponent;
