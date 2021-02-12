import React from 'react';
import styled from "styled-components";
import title from "../img/title.png";
import Game from "./Game";
import {GameType} from "../types/types";
import logo from "../img/logo.png";
import Footer from "./Footer";
import template from "../img/background-template/template.png";
import headerTemplate from "../img/background-template/header-template.png";
import backgroundTemplate from "../img/background-template/main-screen-background.png";


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
  margin-bottom: auto;
  //background: #fffbe8;
  background-image: url(${headerTemplate});
  padding: 0.5rem;
`

const LeftSideDiv = styled.div`
  display: flex;
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
  max-width: 95%;
  margin-top: auto;
  margin-bottom: auto;
`

const StyledInput = styled.input`
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  width: 25%;
  height: 2.5rem;
  outline: none;
`

const DirectionsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  color: cadetblue;
  cursor: pointer;
  padding-right: 1rem;
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

const GameWrapper = styled.div`
  width: 75%;
  display: inline-block;
  margin: 0 auto;
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
                    <Game gameList={props.gameList}/>
                </GameWrapper>
            </MainDiv>
            <Footer/>
        </>
    );
}

export default SearchScreen;
