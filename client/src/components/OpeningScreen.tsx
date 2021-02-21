import React from 'react';
import styled from "styled-components";
import mainGiraffe from "../img/main-giraffe-family.png";
import title from "../img/title.png";
import logo from "../img/logo.png";
import Footer from "./Footer";
import WhatIsFPS from "./WhatIsFPS";
import template from "../img/background-template/main-screen-background.png";


type Props = {
    onInputChange: any;
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  min-height: 100vh;
  //background: #e0fcff;
  background-image: url(${template});

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
  }
`

const MainGiraffeImage = styled.img`
  width: 100%;

  @media only screen and (min-width: 1200px) {
    width: 35%;
    margin: auto;
  }
`

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25%;
  margin-bottom: 25%;

  @media only screen and (min-width: 1200px) {
    margin-bottom: 0;
    margin-top: 0;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  width: 90%;
  
  @media only screen and (min-width: 1200px) {
    width: 57%;
  }
`

const TitleImage = styled.img`
  max-width: 80%;
  margin-top: auto;
  margin-bottom: auto;
`

const LogoImage = styled.img`
  max-width: 20%;
  border-radius: 15px 5px;
  box-shadow: -3px 6px 8px #888888;
`

const StyledInput = styled.input`
  display: block;
  margin: 1rem auto 0 auto;
  width: 70%;
  height: 2rem;
  font-size: 12px;
  font-family: PoppinsExtraLight, sans-serif;
  padding-left: 0.5rem;
  border: 1px solid;
  border-radius: 15px 1px;
  outline: none;

  @media only screen and (min-width: 1200px) {
    width: 50%;
    height: 3.5rem;
    font-size: 17px;
  }
`

const IntroductionText = styled.p`
  font-family: PoppinsExtraLight, sans-serif;
  font-size: 11px;
  color: darkslategrey;
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
  width: 75%;

  @media only screen and (min-width: 1200px) {
    font-size: 15px;
    line-height: 1.5rem;
    width: 50%;
  }
`

const DirectionsDiv = styled.nav`
  display: flex;
  cursor: pointer;
  padding-top: 1rem;
  outline: none;
  
  @media only screen and (min-width: 1200px) {
    padding-top: 0;
  }
`

const Link = styled.a`
  color: dimgrey;
  text-decoration: none;
  font-size: 12px;
  font-family: PoppinsExtraLight,serif;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 16px;
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
