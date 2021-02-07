import React from 'react';
import '../App.css';
import styled from "styled-components";
import logo from "../img/logo.png";
import title from "../img/title.png";
import WhatIsFPS from "../components/WhatIsFPS";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const MainDiv = styled.div`
  background-color: #d9ffdb;
`

const SearchDiv = styled.div`
  display: flex;
  margin-bottom: 0;
  background: #fff9d9;
  padding: 0.5rem;
  border-bottom: ridge 2px;
`

const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  width: 25%;
  margin: 0;
`

const LogoImage = styled.img`
  max-width: 20%;
`

const TitleImage = styled.img`
  max-width: 80%;
  margin-top: auto;
  margin-bottom: auto;
`

const AboutSite = styled.div`
  padding-left: 10%;
  padding-right: 30%;
`


const About = () => {
    return (
        <MainDiv>
            <SearchDiv>
                <LogoWrapper onClick={() => {
                    window.location.hash = "/";
                    window.location.pathname = "/";
                }}>
                    <LogoImage src={logo} alt="logo"/>
                    <TitleImage src={title} alt="title"/>
                </LogoWrapper>
            </SearchDiv>
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
