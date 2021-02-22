import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: PoppinsExtraLight, serif;
  display: flex;
  background-color: white;
  justify-content: space-between;
  padding-left: 8%;
  padding-right: 8%;
  min-height: 120px;
  font-size: 15px;

  @media only screen and (min-width: 400px) {
    font-size: 16px;
  }
  
  @media only screen and (min-width: 768px) {
    padding-left: 10%;
    padding-right: 14%;
  }
`

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: PoppinsExtraLight, serif;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;

  & a {
    text-decoration: none;
    cursor: pointer;
    margin-right: 2.3rem;
    color: black;
    padding-bottom: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
    
    @media only screen and (min-width: 450px) {
      padding-bottom: 0;
    }
  }

  @media only screen and (min-width: 450px) {
    flex-direction: row;
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
                <a href={"/about#faq"}>FAQ</a>
                <a href="mailto:mertkose1745@gmail.com">Contact Us</a>
            </LeftDiv>
            <RightDiv>
                <label style={{fontSize: "15px"}}>© {new Date().getUTCFullYear()} GiraffesNeck.com</label>
                <label style={{color: "lightcoral", fontSize: "13px"}}>Powered By Köse Siblings</label>
            </RightDiv>
        </Wrapper>
    );
}

export default Footer;
