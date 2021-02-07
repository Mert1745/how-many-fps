import React from 'react';
import mainGiraffe from "../img/temp-main-screen-giraffe.jpg";
import styled from "styled-components";
import title from "../img/title.png";
import logo from "../img/logo.png";
import Footer from "./Footer";
import WhatIsFPS from "./WhatIsFPS";

type Props = {
    onInputChange: any;
}

const MainDiv = styled.div`
  display: flex;
  min-height: 100vh;
  background: #edd9ff;
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
                        values of the games playable in PlayStation 5 and/or Xbox Series X|S. Wanna see how it works?
                        Just type something and see how long your games giraffes neck</IntroductionText>
                    <DirectionsDiv>
                        <Link href={"#what-is-fps"}>What is FPS&nbsp;</Link>
                        <Divider>|</Divider>
                        <Link href={"/about"}>&nbsp;About&nbsp;</Link>
                        <Divider>|</Divider>
                        <Link href={"mailto:mertkose1745@gmail.com"}>Contact Us</Link>
                    </DirectionsDiv>
                </SearchDiv>
            </MainDiv>
            <WhatIsFPS/>
            <Footer/>
        </>
    );
}

export default OpeningScreen;
