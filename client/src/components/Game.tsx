import React from 'react';
import styled, {css} from 'styled-components';
import {GameType} from "../types/types";

type GameProps = {
    gameList: GameType[]
}

const MainDiv = styled.div`
    display: flex;
`

const PropertiesList = styled.ul`
    list-style-type:none;
    display: block;
    margin: 0 auto;
    border-style: double;
`

const Game = (props: GameProps) => {
    return (
        <MainDiv>
            {props.gameList !== null && props.gameList?.length !== 0 &&
            props.gameList?.map(game =>
                <PropertiesList>
                    <li>Name: {game.name}</li>
                    <li>Platform: {game.platform.map(p => p?.name)}</li>
                    <li>Frame: {game.platform.map(p => p?.frame)}</li>
                </PropertiesList>)}
        </MainDiv>
    );
}

export default Game;
