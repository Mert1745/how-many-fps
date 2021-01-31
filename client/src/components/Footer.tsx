import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: PoppinsExtraLight, sans-serif;
  display: flex;
  background: aliceblue;
  justify-content: space-around;
  min-height: 100px;
  border-top: solid 1px;
`

const LeftDiv = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  
  & a {
    text-decoration: none;
    cursor: pointer;
    padding-right: 2rem;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }
`

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Footer = () => {
    return (
        <Wrapper>
            <LeftDiv>
                <a href={"/about"}>About</a>
                <a href={"/about"}>FAQ</a>
                <a href={"/about"}>Contact Us</a>
            </LeftDiv>
            <RightDiv>
                <label>© {new Date().getUTCFullYear()} GiraffesNeckFPS.com</label>
                <label>Powered By Köse Siblings</label>
            </RightDiv>
        </Wrapper>
    );
}

export default Footer
