import React from "react";
import styled from "styled-components";
import FriendsMainHeader from "../../../components/friendsMain/FriendsMainHeader";
import RecentlyCompleteFriendsItem from "./RecentlyCompleteFriendsItem";

export interface CompleteFriendsPropsType {
  name: string;
  imageUrl: string;
}

const HEADER_STRING: string = '부적을 완성한 친구';

const CompleteFriendsComponent = styled.div`
  padding: 16px;
  margin-bottom: 4px;
`

const ItemsComponent = styled.div`
  display: flex;
  margin-top: 12px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: auto;
  height: 133px;
`

function RecentlyCompleteFriends(props: {item: CompleteFriendsPropsType[]}) {
  return (
    <CompleteFriendsComponent>
      <FriendsMainHeader headerString={HEADER_STRING} counts={props.item.length}/>
      <ItemsComponent>
        {props.item.map((i, idx) =>(
          <RecentlyCompleteFriendsItem key={idx} name={i.name} imageUrl={i.imageUrl} />
        ))}
      </ItemsComponent>
    </CompleteFriendsComponent>
  )
}

export default RecentlyCompleteFriends;