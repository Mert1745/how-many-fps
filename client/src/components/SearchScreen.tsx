import React from 'react';
import styled from "styled-components";
import title from "../img/title.png";
import Game from "./Game";
import {GameType} from "../types/types";
import logo from "../img/logo.png";
import Footer from "./Footer";

type Props = {
    onInputChange: any;
    inputValue: string;
    gameList: GameType[];
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #edd9ff;
  padding-bottom: 1rem;
`

const SearchDiv = styled.div`
  display: flex;
  margin-bottom: 0;
  background: #fff9d9;
  padding: 0.5rem;
  border-bottom: ridge 2px;
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
  max-width: 20%;
`

const TitleImage = styled.img`
  max-width: 80%;
  margin-top: auto;
  margin-bottom: auto;
`

const StyledInput = styled.input`
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  width: 25%;
  height: 2.5rem;
`

const DirectionsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  color: cadetblue;
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

const GameWrapper = styled.div`
  width: 75%;
  display: inline-block;
  margin: 0 auto;
`

const SearchScreen = (props: Props) => {
    return (
        <>
            <MainDiv>
                <SearchDiv>
                    <LeftSideDiv>
                        <LogoWrapper onClick={() => window.location.href = ""}>
                            <LogoImage src={logo} alt="logo"/>
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
                <GameWrapper>
                    <Game gameList={props.gameList}/>
                </GameWrapper>
            </MainDiv>
            <Footer/>
        </>
    );
}

export default SearchScreen;
