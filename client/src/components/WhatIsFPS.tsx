import React from 'react';
import styled from "styled-components";
import fpsGif from "../gif/fps-comparison.gif";
import backgroundTemplate from "../img/background-template/what-is-fps-background-template.png";


const WhatIsFPSWrapper = styled.section`
  font-family: PoppinsExtraLight, serif;
  background-image: url(${backgroundTemplate});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2% 10% 2% 10%;
  min-height: 350px;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }
`

const FPSLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: PoppinsExtraLight, serif;
  padding-right: 10%;
  padding-top: 3%;
  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`

const FPSTitle = styled.span`
  font-size: 35px;
  font-weight: 900;
  color: #483d8b;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: 1024px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const MainText = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;

  @media only screen and (min-width: 1024px) {
    font-size: 15px;
  }
`

const GifWrapper = styled.div`
  width: 89%;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: 1024px) {
    margin-top: auto;
    margin-bottom: auto;
    width: 40%;
  }
`
const Gif = styled.img`
  opacity: 0.90;
  width: 100%;
  box-shadow: 0 8px 8px grey;

  @media only screen and (min-width: 1024px) {
    
  }
`
const GifText = styled.label`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 12px;
  color: #a03439;
  font-weight: bold;

  @media only screen and (min-width: 1024px) {
    font-size: 15px;
    margin-top: 1rem;
  }
`

const WhatIsFPS = () => {
    return (
        <WhatIsFPSWrapper id="what-is-fps">
            <FPSLeftDiv>
                <FPSTitle>What is FPS?</FPSTitle>
                <MainText>Frames Per Second (FPS) is a frequency rate at which consecutive images
                    called frames appear on a display. For example if you see 30 images (frames) in a second, that means
                    that context (it may be video, game etc.) is 30 FPS.<br/><br/>
                    The more images you see in the context, the smoother experience you get. In video games, 30 FPS
                    (some
                    say 24) is considered the minimum value the game should be playable. With the next gen consoles,
                    most of the games now have 60 FPS or even 120 FPS options.
                </MainText>
            </FPSLeftDiv>
            <GifWrapper>
                <Gif src={fpsGif} alt="fps-difference-gif"/>
                <GifText>visual representation of different fps values</GifText>
            </GifWrapper>
        </WhatIsFPSWrapper>
    );
}

export default WhatIsFPS;
