import React, {useState} from 'react';
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
  //background-color: cornsilk;
  background-image: url(${gameTemplate});
  box-shadow: 5px 10px 8px #888888;
  border-radius: 15px;

  width: ${props => props.numberOfPlatform > 3 ? "100%" : "48%"};
`

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  width: 150px;
  height: 225px;
  box-shadow: 3px 6px 8px #888888;
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

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`

const ResolutionText = styled.p`
  font-family: PoppinsExtraLight, sans-serif;
  display: flex;
  font-weight: bold;
  font-size: 22px;
  letter-spacing: 2px;
  border: 2px ridge;
  padding: 0 1rem;
`

const InfoImage = styled.img`
  height: 33px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1rem;
  cursor: pointer;
`

const InfoDiv = styled.div`
  border: 2px ridge;
  background: ghostwhite;
  font-size: 14px;
  padding: 0.5rem;
  position: absolute;
  right: -75%;
  top: -20%;
  border-radius: 10px 10px 10px 0;
`

const Game = (props: GameProps) => {
    const [infoTextSwitch, setInfoText] = useState(false);

    return (
        <MainDiv>
            {props.gameList !== null && props.gameList?.length !== 0 &&
            props.gameList?.map(game =>
                <Wrapper numberOfPlatform={game.platform.length}>
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
                                    <Giraffe src={getPlatformsGiraffe(platform.name, platform.frame)}/>
                                    <Bar src={getPlatformFrameBar(platform.frame)}/>
                                </Center>
                                <Bottom>
                                    <ResolutionText>{platform.resolution}</ResolutionText>
                                    {platform.info &&
                                    <InfoImage src={infoIcon} onClick={() => setInfoText(!infoTextSwitch)}
                                               onMouseOver={() => setInfoText(!infoTextSwitch)}
                                               onMouseLeave={() => setInfoText(!infoTextSwitch)}/>}
                                    {platform.info && infoTextSwitch && <InfoDiv>{platform.info}</InfoDiv>}
                                </Bottom>
                            </PlatformColumn>
                        )}
                    </RightBlock>
                </Wrapper>)}
        </MainDiv>
    );
}

export default Game;
