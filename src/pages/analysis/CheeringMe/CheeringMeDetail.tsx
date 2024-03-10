import React from "react";
import styled from "styled-components";
import RankItem from "../../../components/RankItems"
import { RankItemParam } from "../../../components/RankItems";

const CheeringMeDetailComponent = styled.div`
`

function CheeringMeDetail(props: {rankItem: RankItemParam[]}) {
  return (
    <CheeringMeDetailComponent>
      {props.rankItem.map((i, idx) => <RankItem key={idx} itemInfo={i} />)}
    </CheeringMeDetailComponent>
  )
}

export default CheeringMeDetail;