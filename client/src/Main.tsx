import React from 'react';
import './App.css';
import styled, {css} from 'styled-components';

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

function Main() {
    return (
        <MainDiv>
            <Title>search games you want to see</Title>
            <StyledInput type="text"/>
        </MainDiv>
    );
}

export default Main;
