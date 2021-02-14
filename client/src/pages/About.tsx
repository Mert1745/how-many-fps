import React from 'react';
import '../App.css';
import styled from "styled-components";
import logo from "../img/logo.png";
import title from "../img/title.png";
import WhatIsFPS from "../components/WhatIsFPS";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import mainScreenTemplate from "../img/background-template/main-screen-background.png";
import headerTemplate from "../img/background-template/header-template.png";

const MainDiv = styled.div`
  background-image: url(${mainScreenTemplate});
  font-family: PoppinsExtraLight, sans-serif;
`

const HeaderWrapper = styled.div`
  display: flex;
`

const SearchDiv = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: auto;
  background-image: url(${headerTemplate});
  padding: 0.65rem;
`

const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  margin: 0;

  @media only screen and (min-width: 768px) {
    width: 25%;
  }
`

const LogoImage = styled.img`
  width: 60px; 
  margin-left: 0.5rem;
  border-radius: 15px 5px;
  box-shadow: -3px 6px 8px #888888;
  cursor: pointer;

  @media only screen and (min-width: 450px) {
    width: 75px;
  }
  
  @media only screen and (min-width: 768px) {
    width: 6.5%;
  }
  
  @media only screen and (min-width: 1366px) {
    width: 4.5%;
  }
`

const TitleImage = styled.img`
  max-width: 100%;
  margin-top: auto;
  margin-bottom: auto;

  @media only screen and (min-width: 450px) {
    width: 80%;
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`

const AboutSite = styled.div`
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 3%;
  padding: 0.7rem 2rem 3rem 2rem;
  border-radius: 15px;
  background-image: url(${headerTemplate});

  @media only screen and (min-width: 768px) {
    margin-left: 10%;
    margin-right: 30%;
    padding: 0.7rem 5rem 3rem 4rem;
  }
`


const About = () => {
    const onLogoClick = () => {
        window.location.hash = "/";
        window.location.pathname = "/";
    };

    return (
        <MainDiv>
            <HeaderWrapper>
                <LogoImage src={logo} alt="logo" onClick={onLogoClick}/>
                <SearchDiv>
                    <LogoWrapper onClick={onLogoClick}>
                        <TitleImage src={title} alt="title"/>
                    </LogoWrapper>
                </SearchDiv>
            </HeaderWrapper>
            <AboutSite>
                <h1>About</h1>
                <label>With the 9th generation console releases, games have started to offer more different resolution
                    and FPS. Most of the games have different values. And some of them now offers you different graphic
                    options. So we thought we could collect all these games and values into one website to track
                    easily.
                </label>
            </AboutSite>
            <FAQ/>
            <WhatIsFPS/>
            <Footer/>
        </MainDiv>
    )
}

export default About;
