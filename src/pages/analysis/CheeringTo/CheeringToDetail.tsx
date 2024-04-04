import React from "react";
import styled from "styled-components";
import RankItem from "../../../components/analysis/RankItems"
import { RankItemParam } from "../../../components/analysis/RankItems";

const CheeringMeDetailComponent = styled.div`
`

function CheeringToDetail(props: {rankItem: RankItemParam[]}) {
  return (
    <CheeringMeDetailComponent>
      {props.rankItem.map((i, idx) => <RankItem key={idx} itemInfo={i} />)}
    </CheeringMeDetailComponent>
  )
}

export default CheeringToDetail;