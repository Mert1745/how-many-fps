import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {GameType, PlatformName} from "../types/types";
import {getPlatformFrameBar, getPlatformName, getPlatformsGiraffe} from "../types/utils";
import gameTemplate from "../img/background-template/game-template.png";
import infoIcon from "../img/info-icon.png";


type GameProps = {
    gameList: GameType[]
}

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Wrapper = styled.div<{ numberOfPlatform: number }>`
  display: flex;
  padding: 0.75rem;
  margin-top: 1.5rem;
  background-image: url(${gameTemplate});
  box-shadow: 5px 5px 8px #888888;
  border-radius: 15px;
  width: 100%;


  @media only screen and (min-width: 642px) {
    width: ${props => props.numberOfPlatform > 2 ? "100%" : "46%"};
    box-shadow: 5px 10px 8px #888888;
  }

  @media only screen and (min-width: 1024px) {
    width: ${props => props.numberOfPlatform > 2 ? "100%" : "47%"};
  }

`

// width: ${props => props.numberOfPlatform > 3 ? "12%" : "24%"};
const LeftBlock = styled.div<{ numberOfPlatform: number }>`
  display: flex;
  flex-direction: column;
`

const GameCoverImage = styled.img`
  width: 80px;
  box-shadow: 3px 6px 8px #888888;

  @media only screen and (min-width: 1024px) {
    width: 120px;
  }
`

const GameNameText = styled.p`
  font-family: PoppinsExtraLight, serif;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  width: 80px;

  @media only screen and (min-width: 1024px) {
    font-size: 14px;
    //margin: auto;
    width: 120px;
  }
`

// width: ${props => props.numberOfPlatform > 3 ? "88%" : "76%"};
const RightBlock = styled.div<{ numberOfPlatform: number }>`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    //flex-wrap: nowrap;
  }
`

const PlatformColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`

const PlatformNameDiv = styled.div<{ name: PlatformName }>`
  display: flex;
  position: relative;
  margin: 0 auto;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  font-size: 12px;
  font-family: PoppinsExtraLight, serif;

  @media only screen and (min-width: 1024px) {
    padding: 0.35rem 0.75rem 0.35rem 0.75rem;
    font-size: 14px;
  }

  background-color: ${props => props.name === PlatformName.PLAYSTATION_5 ? "#2E6DB4" :
          props.name === PlatformName.XBOX_SERIES_X ? "#0f7b0e" : "white"};
  color: ${props => props.name === PlatformName.PLAYSTATION_5 || props.name === PlatformName.XBOX_SERIES_X ? "white" : "#0f7b0e"};

  ${props => props.name === PlatformName.XBOX_SERIES_S && `
    border-style: ridge;
    border-color: #0f7b0e;    
    border-width: 1px;
    font-weight: bold;      
  `}
`

const GameModeDiv = styled.div`
  position: absolute;
  right: 2%;
  bottom: -3%;
  font-size: 8px;

  @media only screen and (min-width: 1024px) {
    font-size: 9px;
    bottom: -2%;
  }
`

const Center = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin: 0.5rem auto;
`

const Giraffe = styled.img`
  width: 50px;

  @media only screen and (min-width: 1024px) {
    width: 60px;
  }
  @media only screen and (min-width: 1366px) {
    width: 75px;
  }
`

const Bar = styled.img`
  width: 50px;

  @media only screen and (min-width: 1024px) {
    width: 60px;
  }
  @media only screen and (min-width: 1366px) {
    width: 75px;
  }
`

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`

const ResolutionText = styled.p`
  font-family: PoppinsExtraLight, serif;
  display: flex;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2px;
  border: 1px solid gray;
  padding: 0 1rem;

  @media only screen and (min-width: 1024px) {
    font-size: 17px;
  }
`

const InfoImage = styled.img`
  height: 24px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1rem;
  cursor: pointer;
`

const InfoDiv = styled.div`
  border: 1px solid gray;
  background: ghostwhite;
  font-size: 11px;
  padding: 0.25rem 0.5rem;
  position: absolute;
  bottom: 3rem;
  right: 0;
  border-radius: 10px 10px 0 10px;
  z-index: 20;
  opacity: 0.95;
  font-family: PoppinsExtraLight, serif;
  font-weight: bold;
  line-height: 0.9rem;

  @media only screen and (min-width: 1024px) {
    font-size: 13px;
    padding: 0.5rem;
    white-space: normal;
    line-height: 1.1rem;
  }

`

const Game = (props: GameProps) => {
    const [infoTextSwitch, setInfoText] = useState("");

    return (
        <MainDiv>
            {props.gameList !== null && props.gameList?.length !== 0 &&
            props.gameList?.map(game =>
                <Wrapper numberOfPlatform={game.platform.length}>
                    <LeftBlock numberOfPlatform={game.platform.length}>
                        <GameCoverImage src={"data:image/jpg;base64, " + game.image} alt={game.name}/>
                        <GameNameText>{game.name}</GameNameText>
                    </LeftBlock>
                    <RightBlock numberOfPlatform={game.platform.length}>
                        {game.platform.map(platform =>
                            <PlatformColumn>
                                <PlatformNameDiv name={platform.name}>{getPlatformName(platform.name)}
                                    {platform.mode && (<GameModeDiv>{platform.mode.toLowerCase()}</GameModeDiv>)}
                                </PlatformNameDiv>
                                <Center>
                                    <Giraffe src={getPlatformsGiraffe(platform.name, platform.frame)}/>
                                    <Bar src={getPlatformFrameBar(platform.frame)}/>
                                </Center>
                                <Bottom>
                                    <ResolutionText>{platform.resolution}</ResolutionText>
                                    {platform.info &&
                                    <InfoImage src={infoIcon}
                                               onClick={() => setInfoText(infoTextSwitch !== platform.name + platform.info + platform.mode ? platform.name + platform.info + platform.mode : "")}
                                    />}
                                    {platform.info && infoTextSwitch === platform.name + platform.info + platform.mode &&
                                    <InfoDiv>{platform.info}</InfoDiv>}
                                </Bottom>
                            </PlatformColumn>
                        )}
                    </RightBlock>
                </Wrapper>)}
        </MainDiv>
    );
}

export default Game;
