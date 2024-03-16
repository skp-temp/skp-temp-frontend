import React from "react";
import styled from "styled-components";
import FriendsMainHeader from "../../../components/friendsMain/FriendsMainHeader";
import NewFriendsItem from "./NewFriendsItem";

export interface NewFriendsPropsType {
  name: string;
  imageUrl: string;
  makingItem?: string[];
}

const HEADER_STRING: string = '새로 추가된 친구';

const NewFriendsComponent = styled.div`
  padding: 16px;
  margin-bottom: 4px;
`

const ItemsComponent = styled.div`
  margin-top: 8px;
`

function NewFriends(props: {item: NewFriendsPropsType[]}) {
  return(
    <NewFriendsComponent>
      <FriendsMainHeader headerString={HEADER_STRING} counts={props.item.length} />
      <ItemsComponent>
        {props.item.map((i, idx) => (
          <NewFriendsItem key={idx} name={i.name} imageUrl={i.imageUrl} makingItem={i.makingItem} />
        ))}
      </ItemsComponent>
    </NewFriendsComponent>
  )
}

export default NewFriends;