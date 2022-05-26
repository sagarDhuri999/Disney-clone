import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommends";
import Recommends2 from "./Recommends2";
import Recommends3 from "./Recommends3";
import Viewers from "./Viewers";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <Recommends2 />
      <Recommends3 />

    </Container>
  )
};
const Container = styled.main`
position:relative;
min-height:calc(100vh-250px);
 overflow-x:hidden;
display:block;
top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
      content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;}

;
`

export default Home
