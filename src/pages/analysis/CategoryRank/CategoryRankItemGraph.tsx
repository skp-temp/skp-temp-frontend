import React from "react";
import styled, { keyframes } from "styled-components";

const barChange = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`

const CategpryGraph = styled.div<{$width:number}>`
  width: ${props => props.$width}%;
  min-width: ${props => props.$width ? '14px' : ''};
  height: 24px;
  display: flex;
  align-items: center;
`

const GraphItem = styled.div<{$color:number}>`
  height: 14px;
  border-radius: 20px;
  background-color: #007AFF;
  opacity: ${props => props.$color};
  animation: ${barChange} 1s 0s forwards;
`

function CategoryRankItemGraph(props: {width:number, color:number}) {
  return (
    <CategpryGraph $width={props.width}>
      <GraphItem $color={props.color} />
    </CategpryGraph>
  )
}

export default CategoryRankItemGraph;