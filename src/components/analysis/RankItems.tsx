import React from 'react';
import styled from 'styled-components';
import { SEMANTIC_COLOR, GRAY_COLOR } from '../../constants';

export interface RankItemParam {
  imageUrl?: string;
  name?: string;
  rank: number;
  counts?: number;
}

const RankItemComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  margin-bottom: 14px;
`;

const ItemInfo = styled.div`
  display: flex;
  width: 135px;
  justify-content: space-between;
  align-items: center;
`;

const ItemRank = styled.div<{ $bg_color: string; $color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${(props) => props.$bg_color};
  color: ${(props) => props.$color};
  width: 32px;
  height: 20px;
  font-size: 14px;
  font-family: 'PretendardRegular';
  margin-right: 8px;
`;

const ItemImage = styled.div<{ $imageUrl: string }>`
  background-image: url('${(props) => props.$imageUrl}');
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
`;

const ItemImageNull = styled.div`
  background-image: url('images/analysis/nullImage.svg');
  background-size: cover;
  width: 24px;
  height: 24px;
  margin: 16px;
`;

const ItemName = styled.div`
  color: ${GRAY_COLOR.GRAY_900};
  min-width: 41px;
  font-size: 16px;
  font-family: 'PretendardRegular';
  line-height: 24px;
  word-wrap: break-word;
`;

const ItemScore = styled.div<{ $color: string }>`
  color: ${(props) => props.$color};
  font-size: 16px;
  font-family: 'PretendardRegular';
  line-height: 24px;
  word-wrap: break-word;
`;

function CheeringMeItem(props: { itemInfo: RankItemParam }) {
  return (
    <RankItemComponent>
      <ItemInfo>
        <ItemRank
          $bg_color={
            props.itemInfo.rank === 1 ? '#007aff28' : GRAY_COLOR.GRAY_200
          }
          $color={
            props.itemInfo.rank === 1
              ? SEMANTIC_COLOR.BLUE
              : GRAY_COLOR.GRAY_900
          }
        >
          {props.itemInfo.rank}
        </ItemRank>
        {props.itemInfo.imageUrl ? (
          <ItemImage
            $imageUrl={
              props.itemInfo.imageUrl
                ? 'images/analysis/tmp.png'
                : 'images/analysis/nullImage.svg'
            }
          />
        ) : (
          <ItemImageNull />
        )}
        <ItemName>{props.itemInfo.name}</ItemName>
      </ItemInfo>
      <ItemScore
        $color={
          props.itemInfo.rank === 1 ? SEMANTIC_COLOR.BLUE : GRAY_COLOR.GRAY_900
        }
      >
        {props.itemInfo.counts}
      </ItemScore>
    </RankItemComponent>
  );
}

export default CheeringMeItem;
