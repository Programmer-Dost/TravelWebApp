import video from "../../assets/Header/video.mp4";
import { useState } from "react";
import Button from '@mui/material/Button';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Contact from "./contactComponent/Contact";
const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const onHover = ()=>{
    setHover(!hover)
  }
  return (
    <HeroContainer>
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={video} type="video/mp4" /> */}
        
      </HeroBg>
      <HeroContent>
        <HeroH1>Biggy Travels</HeroH1>
        <HeroP>Travelling Made Easy</HeroP>
        <HeroBtnWrapper>
          <Button style={{color:'white'}} to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          <Contact/>
        </HeroBtnWrapper>
      </HeroContent>

    </HeroContainer>

  );
};

export default HeroSection;
