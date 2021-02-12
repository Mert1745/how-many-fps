import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: PoppinsExtraLight, sans-serif;
  display: flex;
  background-color: white;
  justify-content: space-between;
  padding-left: 13%;
  padding-right: 14%;
  min-height: 120px;
`

const LeftDiv = styled.div`
  font-family: NanumGothicRegular,serif;
  margin-top: auto;
  margin-bottom: auto;
  
  & a {
    text-decoration: none;
    cursor: pointer;
    margin-right: 2.3rem;
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
  font-size: 14px;
  font-weight: bold;
`

const Footer = () => {
    return (
        <Wrapper>
            <LeftDiv>
                <a href={"/about"}>About</a>
                <a href={"/about"}>FAQ</a>
                <a href="mailto:mertkose1745@gmail.com">Contact Us</a>
            </LeftDiv>
            <RightDiv>
                <label style={{fontSize: "17px"}}>© {new Date().getUTCFullYear()} GiraffesNeck.com</label>
                <label style={{color: "lightcoral"}}>Powered By Köse Siblings</label>
            </RightDiv>
        </Wrapper>
    );
}

export default Footer;
