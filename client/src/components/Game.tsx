import React from 'react';
import styled from 'styled-components';
import {GameType, PlatformName} from "../types/types";
import {getPlatformFrameBar, getPlatformName, getPlatformsGiraffe} from "../types/utils";

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
  padding: 0.5rem;
  margin-top: 1rem; //top right bottom left
  background-color: cornsilk;
  border-style: ridge;
  border-width: 1px;
  border-color: #282c34;

  width: ${props => props.numberOfPlatform > 3 ? "100%" : "48%"};
`

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  width: 150px;
  height: 225px;
  border-style: groove;
  border-width: 1px;
`

const GameNameText = styled.p`
  font-family: PoppinsExtraLight, sans-serif;
  margin: auto;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  max-width: 152px;
`

const RightBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-family: PoppinsExtraLight, sans-serif;

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
  bottom: 0;
  font-size: 10px;
`

const Center = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem auto;
`

const Giraffe = styled.img`
  width: 90px;
  height: 180px;
`

const Bar = styled.img`
  width: 90px;
  height: 180px;
`

const ResolutionText = styled.p`
  font-family: PoppinsExtraLight, sans-serif;
  display: flex;
  margin: 0.5rem auto;
  font-weight: bold;
  font-size: 22px;
  letter-spacing: 2px;
  border: 2px ridge;
  padding: 0 1rem;
`

const Game = (props: GameProps) => {
    return (
        <MainDiv>
            {props.gameList !== null && props.gameList?.length !== 0 &&
            props.gameList?.map(game =>
                <Wrapper numberOfPlatform={game.platform.length}>
                    {/*TODO mkose not found resmi ekle*/}
                    <LeftBlock>
                        <Image src={"data:image/jpg;base64, " + game.image} alt={game.name}/>
                        <GameNameText>{game.name}</GameNameText>
                    </LeftBlock>
                    <RightBlock>
                        {game.platform.map(platform =>
                            <PlatformColumn>
                                <PlatformNameDiv name={platform.name}>{getPlatformName(platform.name)}
                                    {platform.mode && (<GameModeDiv>{platform.mode.toLowerCase()}</GameModeDiv>)}
                                </PlatformNameDiv>
                                <Center>
                                    <Giraffe src={getPlatformsGiraffe(platform.name)}/>
                                    <Bar src={getPlatformFrameBar(platform.frame)}/>
                                </Center>
                                <ResolutionText>{platform.resolution}</ResolutionText>
                                {/*    TODO mkose add hasIssues image*/}
                            </PlatformColumn>
                        )}
                    </RightBlock>
                </Wrapper>)}
        </MainDiv>
    );
}

export default Game;
