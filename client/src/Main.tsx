import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import {GameType} from "./types/types";
import Game from "./components/Game";
import title from './img/title.png'


const MainDiv = styled.div<{ inputDirty: boolean }>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: blanchedalmond;

  ${props => !props.inputDirty && `
    justify-content: center;
  `}
`

const SearchDiv = styled.div<{ inputDirty: boolean }>`
  display: ${props => props.inputDirty ? "flex" : "block"};
  margin-bottom: ${props => props.inputDirty ? "0" : "15%"};

  ${props => props.inputDirty && `
    background: aliceblue;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    border-bottom: ridge 2px;
  `}
`

const Title = styled.img<{ inputDirty: boolean }>`
  display: flex;
  width: 25%;
  margin: ${props => props.inputDirty ? "0" : "0 auto 1rem auto"};
`

const StyledInput = styled.input<{ inputDirty: boolean }>`
  display: block;
  margin: ${props => props.inputDirty ? "0" : "0 auto"};
  width: 25%;
  height: 2.5rem;
`

const Footer = styled.div`
  background: #61dafb;
  height: 300px;
`
let myTimeout: NodeJS.Timeout;

const Main = () => {
    const [gameList, setGameList] = useState<GameType[]>([]);
    const [inputDirty, setInputDirty] = useState(false);

    const onInputChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setInputDirty(true);
        if (myTimeout) {
            clearTimeout(myTimeout);
        }
        myTimeout = setTimeout(() => {
            // TODO mkose is hardcoded "localhost" text a good approach?
            fetch("http://localhost:8080/getGamesByName", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name: value.target.value})
            }).then(response => {
                return response.json();
            }).then(responseData => {
                const list = responseData.body as GameType[];
                setGameList(list);
            });
        }, 700);
    }

    return (
        <>
            <MainDiv inputDirty={inputDirty}>
                <SearchDiv inputDirty={inputDirty}>
                    <Title src={title} alt={"title"} inputDirty={inputDirty}/>
                    <StyledInput inputDirty={inputDirty} onChange={value => onInputChange(value)}
                                 placeholder="search for games"/>
                </SearchDiv>
                <Game gameList={gameList}/>
            </MainDiv>
            {!inputDirty && <Footer>
                This is footer
            </Footer>}
        </>
    )
}

export default Main;
