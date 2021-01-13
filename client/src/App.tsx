import React from 'react';
import './App.css';
import Main from "./Main";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <>
                <Switch>
                    <Route path="/" component={Main} exact/>
                </Switch>
            </>
        </BrowserRouter>
    );
}

export default App;
