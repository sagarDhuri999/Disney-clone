import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="#/">
          <img src="https://whatsondisneyplus.com/wp-content/uploads/2021/06/june-next-on.jpg" alt="img" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#/">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/54CAE5AD5BEFF83682EA4CDC796F69B7CF64D300822B24D8B2D8A4C85958DA0A/scale?width=800&aspec" alt="img" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#/">
          <img src="https://images.macrumors.com/t/MP8XNdmNR0b5NrtLjhFwtfl8w9w=/800x0/article-new/2021/03/disney-plus.jpg?lossy" alt="img" />
        </a>
      </Wrap>

      <Wrap>
        <a href="#/">
          <img src="https://whatsondisneyplus.com/wp-content/uploads/2020/05/avatar-1024x576.jpg" alt="img" />
        </a>
      </Wrap>

      <Wrap>
        <a href="#/">
          <img src="https://thedisinsider.com/wp-content/uploads/2021/05/5E21FC34-7B02-4584-9C84-BE1DA865E7D9.jpeg" alt="img" />
        </a>
      </Wrap>

      <Wrap>
        <a href="#/">
          <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/03/disney-releases-through-2025.jpg" alt="img" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;


export default ImgSlider
