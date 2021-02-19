import React from 'react';
import styled from "styled-components";
import fpsGif from "../gif/fps-difference.gif";
import backgroundTemplate from "../img/background-template/what-is-fps-background-template.png";


const WhatIsFPSWrapper = styled.section`
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
  font-family: PoppinsExtraLight, sans-serif;
  padding-right: 10%;
  padding-top: 3%;
`

const FPSTitle = styled.span`
  font-size: 35px;
  font-weight: 900;
  color: #483d8b;
`

const MainText = styled.span`
  font-family: PoppinsExtraLight, sans-serif;
  font-size: 15px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
`

const Gif = styled.img`
  max-width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: 1024px) {
    max-width: 30%;
    margin-top: auto;
    margin-bottom: auto;
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
                    The more images you see in a context, the smoother experience you get. In video games, 30 FPS (some
                    even say 24) is considered the minimum value the game should be. But with the next gen consoles,
                    most of the games now have 60 FPS or even 120 FPS options.
                </MainText>
            </FPSLeftDiv>
            <Gif src={fpsGif} alt="fps-difference-gif"/>
        </WhatIsFPSWrapper>
    );
}

export default WhatIsFPS;
