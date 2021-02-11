import React from 'react';
import '../App.css';
import styled from "styled-components";
import logo from "../img/logo.png";
import title from "../img/title.png";
import WhatIsFPS from "../components/WhatIsFPS";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const MainDiv = styled.div`
  background: #edd9ff;
`

const SearchDivWrapper = styled.div`
  display: flex;
`

const SearchDiv = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: auto;
  background: #fffbe8;
  padding: 0.65rem;
`

const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  width: 25%;
  margin: 0;
`

const LogoImage = styled.img`
  max-width: 4.5%;
  margin-left: 0.5rem;
  border-radius: 15px 5px;
  box-shadow: -3px 6px 8px #888888;
  cursor: pointer;
`

const TitleImage = styled.img`
  max-width: 80%;
  margin-top: auto;
  margin-bottom: auto;
`

const AboutSite = styled.div`
  margin-left: 10%;
  margin-right: 30%;
  padding: 0.1rem 5rem 3rem 4rem;
  box-shadow: 5px 10px 8px #888888;
  border-radius: 15px;
  background-color: #fffbe8;
`


const About = () => {

    const onLogoClick = () => {
        window.location.hash = "/";
        window.location.pathname = "/";
    };

    return (
        <MainDiv>
            <SearchDivWrapper>
                <LogoImage src={logo} alt="logo" onClick={onLogoClick}/>
                <SearchDiv>
                    <LogoWrapper onClick={onLogoClick}>
                        <TitleImage src={title} alt="title"/>
                    </LogoWrapper>
                </SearchDiv>
            </SearchDivWrapper>
            <AboutSite>
                <h1>About</h1>
                <label>With the 9th generation console releases, games have started to offer more different resolution
                    and FPS. Most of the games have different values. And some of them now offers you different graphic
                    options. So we thought we could collect all these games and values into one website to track
                    easily.</label>
            </AboutSite>
            <FAQ/>
            <WhatIsFPS/>
            <Footer/>
        </MainDiv>
    )
}

export default About;
