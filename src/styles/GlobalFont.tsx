import { createGlobalStyle } from "styled-components";
import PretendardBold from "../assets/fonts/Pretendard-Bold.woff";
import PretendardMedium from "../assets/fonts/Pretendard-Medium.woff"
import PretendardRegular from "../assets/fonts/Pretendard-Regular.woff"

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: "PretendardBold";
    src: local("PretendardBold"), url(${PretendardBold}) format('woff');
  }
  @font-face {
    font-family: "PretendardMedium";
    src: local("PretendardMedium"), url(${PretendardMedium}) format('woff');
  }
  @font-face {
    font-family: "PretendardRegular";
    src: local("PretendardRegular"), url(${PretendardRegular}) format('woff');
  }
`

export default GlobalFont;