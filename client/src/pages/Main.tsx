import React, {useState} from 'react';
import '../App.css';
import {GameType} from "../types/types";
import OpeningScreen from "../components/OpeningScreen";
import SearchScreen from "../components/SearchScreen";


let myTimeout: NodeJS.Timeout;
const Main = () => {
    const [gameList, setGameList] = useState<GameType[]>([]);
    const [inputDirty, setInputDirty] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        if (!inputDirty) {
            setInputDirty(true);
            setInputValue(value.target.value);
        }
        if (myTimeout) {
            clearTimeout(myTimeout);
        }
        myTimeout = setTimeout(() => {
            // TODO mkose is hardcoded "localhost" text a good approach?
            fetch(process.env.PUBLIC_URL, {
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
        !inputDirty ?
            <OpeningScreen onInputChange={(event: React.ChangeEvent<HTMLInputElement>) => onInputChange(event)}/>
            : <SearchScreen gameList={gameList}
                            inputValue={inputValue}
                            onInputChange={(event: React.ChangeEvent<HTMLInputElement>) => onInputChange(event)}/>
    )
}

export default Main;
