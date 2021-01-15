import React from 'react';
import mainGiraffe from "../img/temp-main-screen-giraffe.jpg";
import styled from "styled-components";
import title from "../img/title.png";
import Game from "./Game";
import {GameType} from "../types/types";

type Props = {
    onInputChange: any;
    inputValue: string;
    gameList: GameType[];
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: blanchedalmond;
`

const SearchDiv = styled.div`
  display: flex;
  margin-bottom: 0;
  background: aliceblue;
  padding: 1rem;
  border-bottom: ridge 2px;
`

const LeftSideDiv = styled.div`
  display: flex;
`

const LogoImage = styled.img`
  cursor: pointer;
  display: flex;
  width: 25%;
  margin: 0;
`

const StyledInput = styled.input`
  display: block;
  margin: 0;
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

const Link = styled.span`
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
  width: 71%;
  display: inline-block;
  margin: 0 auto;
`

const SearchScreen = (props: Props) => {
    return (
        <>
            <MainDiv>
                <SearchDiv>
                    <LeftSideDiv>
                        <LogoImage src={title} alt={"title"}
                                   onClick={() => window.location.pathname = "/"}/>
                        <StyledInput onChange={value => props.onInputChange(value)}
                                     placeholder="search for games"
                                     autoFocus={true} defaultValue={props.inputValue}/>
                    </LeftSideDiv>
                    <DirectionsDiv>
                        <Link>FAQ</Link>
                        <Divider>|</Divider>
                        <Link>What is FPS</Link>
                        <Divider>|</Divider>
                        <Link>About & Contact Us</Link>
                    </DirectionsDiv>
                </SearchDiv>
                <GameWrapper>
                    <Game gameList={props.gameList}/>
                </GameWrapper>
            </MainDiv>
        </>
    );
}

export default SearchScreen;
