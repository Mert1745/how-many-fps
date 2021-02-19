import React from 'react';
import styled from "styled-components";
import title from "../img/title.png";
import Game from "./Game";
import {GameType} from "../types/types";
import logo from "../img/logo.png";
import Footer from "./Footer";
import headerTemplate from "../img/background-template/header-template.png";
import backgroundTemplate from "../img/background-template/main-screen-background.png";
import ps5_30fps_giraffe from "../img/giraffes/ps5_30fps.png";


type Props = {
    onInputChange: any;
    inputValue: string;
    gameList: GameType[];
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  //background: #edd9ff;
  background-image: url(${backgroundTemplate});
  padding-bottom: 1rem;
`
const SearchDivWrapper = styled.div`
  display: flex;
`

const SearchDiv = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: auto;
  //background: #fffbe8;
  background-image: url(${headerTemplate});
  padding: 0.5rem;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    justify-content: normal;
  }
`

const LeftSideDiv = styled.div`
  display: flex;
`

const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  margin: 0;

  @media only screen and (min-width: 768px) {
    width: 25%
  }
`

const LogoImage = styled.img`
  max-width: 15%;
  margin-left: 0.5rem;
  border-radius: 15px 5px;
  box-shadow: -3px 6px 8px #888888;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    max-width: 4.5%;
  }
`

const TitleImage = styled.img`
  max-width: 95%;
  margin-top: auto;
  margin-bottom: auto;
  display: none;
  
  @media only screen and (min-width: 768px) {
   display: block;
  }
`

const StyledInput = styled.input`
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  width: 80%;
  height: 2.5rem;
  outline: none;

  @media only screen and (min-width: 768px) {
    width: 25%;
  }
`

const DirectionsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  color: cadetblue;
  cursor: pointer;
  padding-right: 1rem;
  font-size: 11px;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    font-size: 17px;
    flex-direction: row;
  }
`

const Link = styled.a`
  color: cadetblue;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Divider = styled.span`
  display: none;
  color: black;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`

const GameWrapper = styled.div`
  width: 99%;
  display: inline-block;
  margin: 1rem auto;

  @media only screen and (min-width: 768px) {
    width: 96%;
  } 
  @media only screen and (min-width: 1024px) {
    width: 85%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1366px) {
    width: 77%;
  }
  @media only screen and (min-width: 1600px) {
    width: 66%;
  }
`

const GameNotFound = styled.div`
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
  
  @media only screen and (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`

const Giraffe = styled.img`
  max-width: 100px;
`

const NotFoundText = styled.p`
  font-family: PoppinsExtraLight, serif;
  font-size: 14px;

  @media only screen and (min-width: 768px) {
    font-size: 17px;
    font-weight: bold;
  }
`

const SearchScreen = (props: Props) => {
    return (
        <>
            <MainDiv>
                <SearchDivWrapper>
                    <LogoImage src={logo} alt="logo" onClick={() => window.location.href = ""}/>
                    <SearchDiv>
                        <LeftSideDiv>
                            <LogoWrapper onClick={() => window.location.href = ""}>
                                <TitleImage src={title} alt="title"/>
                            </LogoWrapper>
                            <StyledInput onChange={value => props.onInputChange(value)}
                                         placeholder="search for games"
                                         autoFocus={true} defaultValue={props.inputValue}/>
                        </LeftSideDiv>
                        <DirectionsDiv>
                            <Link href={"/about"}>About & FAQ</Link>
                            <Divider>|</Divider>
                            <Link href={"/about#what-is-fps"}>What is FPS</Link>
                            <Divider>|</Divider>
                            <Link href={"mailto:mertkose1745@gmail.com"}>Contact Us</Link>
                        </DirectionsDiv>
                    </SearchDiv>
                </SearchDivWrapper>
                <GameWrapper>
                    {props.gameList === null ? <GameNotFound>
                            <Giraffe src={ps5_30fps_giraffe} alt="not-found-giraffe"/>
                            <NotFoundText>Haven't you found the game you wanted? Just <a
                                href={"mailto:mertkose1745@gmail.com"}>tell us</a> and we try to add them.</NotFoundText>
                        </GameNotFound> :
                        <Game gameList={props.gameList}/>}
                </GameWrapper>
            </MainDiv>
            <Footer/>
        </>
    );
}

export default SearchScreen;
