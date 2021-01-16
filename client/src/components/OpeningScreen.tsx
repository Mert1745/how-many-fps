import React from 'react';
import mainGiraffe from "../img/temp-main-screen-giraffe.jpg";
import styled from "styled-components";
import title from "../img/title.png";
import logo from "../img/logo.png";
import fpsGif from "../gif/fps-difference.gif";
import Footer from "./Footer";

type Props = {
    onInputChange: any;
}

const MainDiv = styled.div`
  display: flex;
  min-height: 100vh;
  background: blanchedalmond;
`

const MainGiraffeImage = styled.img`
  width: 40%;
`

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15%;
`

const LogoWrapper = styled.div`
  display: flex;
  width: 50%;
  max-width: 50%;
  margin: 0 auto 1rem auto;
`

const TitleImage = styled.img`
  max-width: 80%;
  margin-top: auto;
  margin-bottom: auto;
`

const LogoImage = styled.img`
  max-width: 20%;
`

const StyledInput = styled.input`
  display: block;
  margin: 0 auto;
  width: 50%;
  height: 3.5rem;
  font-size: 17px;
  font-family: PoppinsExtraLight, sans-serif;
  padding-left: 0.5rem;
`

const IntroductionText = styled.p`
  font-family: PoppinsExtraLight, sans-serif;
  font-size: 15px;
  text-align: center;
  margin: 5% 20% 2%;
`

const DirectionsDiv = styled.nav`
  color: cadetblue;
  display: flex;
  cursor: pointer;
`

const Link = styled.a`
  color: cadetblue;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Divider = styled.span`
  color: black;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const WhatIsFPSWrapper = styled.section`
  background: #61dafb;
  display: flex;
  justify-content: space-between;
  padding-left: 15%;
  padding-right: 15%;
  border-top: solid 1px;
  border-color: darkgray;
  min-height: 350px;
`

const FPSLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: PoppinsExtraLight, sans-serif;
  padding-right: 10%;
  padding-top: 3%;
`

const FPSTitle = styled.span`
  font-size: 28px;
  font-weight: 900;
  color: darkslateblue;
  border: solid 1px;
  text-align: center;
`

const MainText = styled.span`
  font-family: PoppinsExtraLight, sans-serif;
  font-size: 15px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
`

const Gif = styled.img`
  max-width: 30%;
  margin-top: auto;
  margin-bottom: auto;
`

const OpeningScreen = (props: Props) => {
    return (
        <>
            <MainDiv>
                <MainGiraffeImage src={mainGiraffe} alt={"mainGiraffe"}/>
                <SearchDiv>
                    <LogoWrapper>
                        <LogoImage src={logo} alt="logo"/>
                        <TitleImage src={title} alt="title"/>
                    </LogoWrapper>
                    <StyledInput onChange={value => props.onInputChange(value)}
                                 placeholder="search for games"/>
                    <IntroductionText>Giraffe's Neck is a simple web site that shows resolution and FPS
                        values of the games that are in PlayStation 5 and/or Xbox Series X|S. Wanna see how it works?
                        Just type something and see how long your games giraffes neck</IntroductionText>
                    <DirectionsDiv>
                        <Link href={"#what-is-fps"}>What is FPS&nbsp;</Link>
                        <Divider>|</Divider>
                        <Link href={"/about"}>&nbsp;About & Contact Us</Link>
                    </DirectionsDiv>
                </SearchDiv>
            </MainDiv>
            <WhatIsFPSWrapper>
                <FPSLeftDiv>
                    <FPSTitle>What is FPS?</FPSTitle>
                    <MainText id="what-is-fps">Frames Per Second (FPS) is a frequency rate at which consecutive images
                        called frames appear on a display. For example, if you see 30 images in a second, that means
                        that context (it may be video, game etc.) is 30 FPS.<br/><br/>
                        The more images you see in a context, the smoother quality you get. In video games, 30 FPS
                        is considered the minimum value the game should be. But with the next gen consoles, most of the
                        games now have
                        60 FPS or even 120 FPS options.
                    </MainText>
                </FPSLeftDiv>
                <Gif src={fpsGif} alt="fps-difference-gif"/>
            </WhatIsFPSWrapper>
            <Footer/>
        </>
    );
}

export default OpeningScreen;
