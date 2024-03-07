import React from "react";
import styled from "styled-components";

const CategpryGraph = styled.div<{$width:number}>`
  width: ${props => props.$width}%;
  min-width: ${props => props.$width ? '14px' : ''};
  height: 24px;
  display: flex;
  align-items: center;
  transition: 1s;
`

const GraphItem = styled.div<{$color:number}>`
  width: 100%;
  height: 14px;
  border-radius: 20px;
  background-color: #007AFF;
  opacity: ${props => props.$color};
`

function CategoryRankItemGraph(props: {width:number, color:number}) {
  return (
    <CategpryGraph $width={props.width}>
      <GraphItem $color={props.color} />
    </CategpryGraph>
  )
}

export default CategoryRankItemGraph;