import React from "react";
import EmotionRankHeader from "./EmotionRankHeader";
import EmotionRankDetail from "./EmotionRankDetail";
import ComponentsPadding from "../../../components/ComponentsPadding";

function EmotionRank() {
  return (
    <>
      <EmotionRankHeader/>
        <EmotionRankDetail/>
      <ComponentsPadding/>
    </>
  )
}

export default EmotionRank;