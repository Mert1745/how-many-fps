import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import {GameType} from "./types/types";
import Game from "./components/Game";

const MainDiv = styled.div`
`

const Title = styled.p`
    text-align: center;
    font-weight: 600;
`

const StyledInput = styled.input`
    display: block;
    margin: 0 auto;
    width: 25%;
    height: 2rem;
`

const Main = () => {
    const [gameList, setGameList] = useState<GameType[]>([]);

    const onInputChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        console.log("value: ", value);
        fetch("http://localhost:8080/getGamesByName", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: value.target.value})
        }).then(response => {
            return response.json();
        }).then(responseData => {
            console.log("response: ", responseData)
            const list = responseData.body as GameType[];
            setGameList(list);
            console.log("gameList ", gameList);
        });
    }

    return (
        <MainDiv>
            <Title>search games you want to see</Title>
            <StyledInput onChange={value => onInputChange(value)}/>
            <Game gameList={gameList}/>
        </MainDiv>
    )
}

export default Main;
