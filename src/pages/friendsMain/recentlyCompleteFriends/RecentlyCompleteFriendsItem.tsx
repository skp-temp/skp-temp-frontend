import React from "react";
import styled from "styled-components";
import { CompleteFriendsPropsType } from "./RecentlyCompleteFriends";
import tmpImage from "../../../assets/images/friendsMain/tmpImage.png"

const CompleteFriendsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 8px;
`

const ImageComponent = styled.div`
  width: 76px;
  height: 112px;
  background-image: url(${tmpImage});
  background-size: cover;
  margin-bottom: 8px;
`

const NameComponent = styled.div`
  color: #1C1C1E;
  font-size: 12px;
  font-family: "PretendardRegular";
  line-height: 12px;
  word-wrap: break-word;
`

function RecentlyCompleteFriendsItem(props: CompleteFriendsPropsType) {
  return (
    <CompleteFriendsItem>
      <ImageComponent />
      <NameComponent>{props.name}</NameComponent>
    </CompleteFriendsItem>
  )
}

export default RecentlyCompleteFriendsItem;