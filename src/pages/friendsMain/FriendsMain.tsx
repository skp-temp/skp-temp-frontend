import React from "react";
import styled from "styled-components";
import RecentlyCompleteFriends from "./recentlyCompleteFriends/RecentlyCompleteFriends";
import NewFriends from "./NewFriends/NewFriends";
import { CompleteFriendsPropsType } from "./recentlyCompleteFriends/RecentlyCompleteFriends";
import { NewFriendsPropsType } from "./NewFriends/NewFriends";

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

const TmpNewList: NewFriendsPropsType[] = [
  {
    name: '오하민',
    imageUrl: 'a'
  },
  {
    name: '오하민',
    imageUrl: 'a',
    makingItem: ['workout', 'workout', 'study']
  }
]

function FriendsMain() {
  return (
    <FriendsMainPage>
      <RecentlyCompleteFriends item={TmpCompleteList} />
      <NewFriends item={TmpNewList} />
    </FriendsMainPage>
  )
}

export default FriendsMain;