import React from 'react';
import './App.css';
import Main from "./Main";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Main} exact/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
