import React from 'react';
import styled from 'styled-components';
import { useIsOpenModal } from '../../store';
import ModalPortal from '../../portal';
import {
  GRAY_COLOR,
  THEME_COLOR,
  CATEGORY_OBJECT,
  CategoryType,
  SEMANTIC_COLOR,
} from '../../constants';
import ItemImageBG from '../../assets/images/common/itemBox.svg';
import ModalCloseButton from '../../assets/images/common/modalClose.svg';

interface PropsType {
  title: string;
  category: CategoryType;
  type: string;
  count: number;
  ModalWidth: number;
  ModalHeight: number;
}

const BOTTOMTEXT = '소품은 7일 차부터 장착할 수 있어요.';

const ModalBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100dvh;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ModalWrap = styled.div<{
  $top: number;
  $left: number;
  $width: number;
  $height: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;

const ModalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  height: 308px;
  align-items: center;
  border-radius: 10px;
  padding: 32px 0 44px 0;
  border: 1px solid ${GRAY_COLOR.WHITE};
  background-color: ${GRAY_COLOR.WHITE};
`;

const ModalClose = styled.div`
  position: absolute;
  background-image: url(${ModalCloseButton});
  background-size: cover;
  width: 24px;
  height: 24px;
  top: 16px;
  right: 16px;
`;

const ModalTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 140px;
  height: 186px;
`;

const Title = styled.div`
  color: ${GRAY_COLOR.BLACK};
  font-size: 20px;
  font-family: 'PretendardBold';
  line-height: 30px;
  text-align: center;
`;

const ItemImageBox = styled.div`
  position: relative;
  background-image: url(${ItemImageBG});
  background-size: cover;
  width: 140px;
  height: 140px;
`;

const ItemCategory = styled.div<{ $color: string; $bgColor: string }>`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgColor};
  position: absolute;
  padding: 4px 7px;
  right: 11.4px;
  top: 11.4px;
  width: auto;
  height: auto;
  font-size: 10px;
  font-family: 'PretendardMedium';
  line-height: 10px;
  letter-spacing: -0.4px;
  text-align: center;
  border-radius: 4px;
`;

const ModalBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 186px;
  height: 96px;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextLeft = styled.div`
  color: ${GRAY_COLOR.BLACK};
  font-size: 16px;
  font-family: 'PretendardRegular';
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const TextRight = styled.div<{ $color: string }>`
  color: ${(props) => props.$color};
  font-size: 16px;
  font-family: 'PretendardMedium';
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const BottomText = styled.div`
  color: ${GRAY_COLOR.WHITE};
  font-size: 14px;
  font-family: 'PretendardRegular';
  line-height: 20px;
  letter-spacing: -0.4px;
  text-align: center;
`;

function ModalComponent({
  title,
  category,
  type,
  count,
  ModalWidth,
  ModalHeight,
}: PropsType) {
  const { setIsOpenModal } = useIsOpenModal();
  const modalLeftPadding = (window.innerWidth - ModalWidth) / 2;
  const modalTopPadding = (window.innerHeight - ModalHeight) / 2;

  return (
    <ModalPortal>
      <ModalBackGround onClick={() => setIsOpenModal(0)} />
      <ModalWrap
        $top={modalTopPadding}
        $left={modalLeftPadding}
        $width={ModalWidth}
        $height={ModalHeight}
      >
        <ModalBox>
          <ModalClose onClick={() => setIsOpenModal(0)} />
          <ModalTop>
            <Title>{title}</Title>
            <ItemImageBox>
              <ItemCategory
                $color={THEME_COLOR[category][400]}
                $bgColor={THEME_COLOR[category][200]}
              >
                {CATEGORY_OBJECT[category]}
              </ItemCategory>
            </ItemImageBox>
          </ModalTop>
          <ModalBottom>
            <TextBox>
              <TextLeft>카테고리</TextLeft>
              <TextRight $color={GRAY_COLOR.BLACK}>
                {CATEGORY_OBJECT[category]}
              </TextRight>
            </TextBox>
            <TextBox>
              <TextLeft>종류</TextLeft>
              <TextRight $color={GRAY_COLOR.BLACK}>{type}</TextRight>
            </TextBox>
            <TextBox>
              <TextLeft>갯수</TextLeft>
              <TextRight $color={SEMANTIC_COLOR.BLUE}>{count}개</TextRight>
            </TextBox>
          </ModalBottom>
        </ModalBox>
        <BottomText>{BOTTOMTEXT}</BottomText>
      </ModalWrap>
    </ModalPortal>
  );
}

export default ModalComponent;
