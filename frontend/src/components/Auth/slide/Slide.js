import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import WelcomePageTwo from "../../Welcome/welcomeTwo/WelcomePageTwo";
import WelcomePageThree from "../../Welcome/welcomeThree/WelcomePageThree";
import WelcomePageFour from "../../Welcome/WelcomeFour/WelcomePageFour";

function WelcomeSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <WelcomePageTwo />
      </div>
      <div>
        <WelcomePageThree />
      </div>
      <div>
        <WelcomePageFour />
      </div>
    </Slider>
  );
}

export default WelcomeSlider;
