import React from "react";
import styled from "styled-components";
import RecentlyCompleteFriends from "./recentlyCompleteFriends/RecentlyCompleteFriends";
import { CompleteFriendsPropsType } from "./recentlyCompleteFriends/RecentlyCompleteFriends";

const FriendsMainPage = styled.div`
`

const TmpCompleteList: CompleteFriendsPropsType[] = [
  {
    name: '강동훈',
    imageUrl: 'a'
  },
  {
    name: '김혜민',
    imageUrl: 'a'
  },
  {
    name: '최태규',
    imageUrl: 'a'
  }
]

function FriendsMain() {
  return (
    <FriendsMainPage>
      <RecentlyCompleteFriends item={TmpCompleteList} />
    </FriendsMainPage>
  )
}

export default FriendsMain;