import React from "react";
import styled from "styled-components";

export interface RankItemParam {
  imageUrl: string;
  name: string;
  rank: number;
  counts: number;
};

const RankItemComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  margin-bottom: 14px;
`

const ItemInfo = styled.div`
  display: flex;
  width: 135px;
  justify-content: space-between;
  align-items: center;
`

const ItemRank = styled.div<{$bg_color: string, $color: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${props => props.$bg_color};
  color: ${props => props.$color};
  width: 32px;
  height: 20px;
  font-size: 14px;
  font-family: "PretendardRegular";
  margin-right: 8px;
`

const ItemImage = styled.div`
  background-image: url('images/analysis/CategoryEmotion.png');
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
`

const ItemName = styled.div`
  color: #1C1C1E;
  font-size: 16px;
  font-family: "PretendardRegular";
  line-height: 24;
  word-wrap: break-word;
`

const ItemScore = styled.div<{$color: string}>`
  color: ${props => props.$color};
  font-size: 16px;
  font-family: "PretendardRegular";
  line-height: 24;
  word-wrap: break-word;
`

function CheeringMeItem(props: {itemInfo: RankItemParam}) {
  return(
    <RankItemComponent>
      <ItemInfo>
        <ItemRank 
          $bg_color={props.itemInfo.rank === 1 ? '#007aff28' : '#F2F2F6'}
          $color={props.itemInfo.rank === 1 ? '#007AFF' : '#1C1C1E'}
          >{props.itemInfo.rank}
        </ItemRank>
        <ItemImage />
        <ItemName>{props.itemInfo.name}</ItemName>
      </ItemInfo>
      <ItemScore $color={props.itemInfo.rank === 1 ? '#007AFF' : '#1C1C1E'}>{props.itemInfo.counts}</ItemScore>
    </RankItemComponent>
  )
}

export default CheeringMeItem;