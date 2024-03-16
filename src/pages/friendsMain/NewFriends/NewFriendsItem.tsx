import React from "react";
import styled from "styled-components";
import NewFriendsStatus from "./NewFriendsStatus";
import { NewFriendsPropsType } from "./NewFriends";

const NewFriendsItemComponent = styled.div`
  display: flex;
  height: 56px;
  justify-content: space-between;
  align-items: center;
`

const ProfileComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ImageComponent = styled.div`
  background-image: url('images/analysis/tmp.png');
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  margin-right: 8px;
`

const NameComponent = styled.div`
  font-size: 16px;
  font-family: "PretendardRegular";
  line-height: 24px;
  word-wrap: break-word;
`

function NewFriendsItem(props: NewFriendsPropsType) {
  return(
    <NewFriendsItemComponent>
      <ProfileComponent>
        <ImageComponent />
        <NameComponent>{props.name}</NameComponent>
      </ProfileComponent>
      {props.makingItem?.length ? <NewFriendsStatus item={props.makingItem} /> : ''}
    </NewFriendsItemComponent>
  )
}

export default NewFriendsItem;