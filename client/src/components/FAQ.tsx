import React from 'react';
import styled from "styled-components";
import boxTemplate from "../img/background-template/header-template.png";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1% 30% 2% 10%;
  padding: 1rem 5rem 3rem 4rem;
  //box-shadow: 5px 10px 8px #888888;
  border-radius: 15px;
  background-image: url(${boxTemplate});
`

const FAQTitle = styled.h1`
  font-weight: bold;
`

const Question = styled.label`
  font-weight: bold;
  padding-bottom: 0.4rem;
  padding-top: 1.5rem;

  & a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Answer = styled.label`
  & a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const FAQ = () => {
    return (
        <Wrapper>
            <FAQTitle>FAQ - Frequently Asked Questions</FAQTitle>
            <Question>Why Giraffe's Neck?</Question>
            <Answer>Initially we thought it would be HowManyFPS as you can understand from the source code but not
                everybody is lazy like us so it couldn't happen. Then we came up with the giraffe idea. It is both
                thematic and mascot-esq that people can remember easily.</Answer>
            <Question>You said we can see source code?</Question>
            <Answer>That's right. Giraffe's Neck is fully open source (except database script). You can reach it <a
                href="https://github.com/Mert1745/how-many-fps">from here</a> and do whatever you want. If you have
                problems,
                questions and suggestions feel free to <a href={"mailto:mertkose1745@gmail.com"}>contact us</a>. We want
                to have a great user experience so we are open to every comment.</Answer>
            <Question>Where do you get data from? How can i trust them?</Question>
            <Answer>We do not have any kit or tool to test games (We can't even afford to every game) So we try to find
                on the internet, mostly from the reliable sources such as Digital Foundry etc. </Answer>
            <Question>Some games have more than two modes but I can only see two modes (performance and
                quality).</Question>
            <Answer>Even though it's so rare, there are scenarios like this. If it has, the game should have an info
                icon that tells this situation</Answer>
            <Question>Some games are not always 60 FPS (or 30 or 120) but the site says otherwise.</Question>
            <Answer>Initially we thought every game is either one of 30, 60 or 120 FPS but some aren't so we added info
                icon that tells this situation if it has</Answer>
            <Question>I can't see the game I'm curious about</Question>
            <Answer>Unfortunately not every game playable on PlayStation 5 and/or Xbox Series X|S can be found our
                website. Because of backward compatibility feature of consoles, there are lots of games you can
                play. Since we don't have any kit or tool to test we basically are </Answer>
            <Question>In some games, I see weird values. How can a game have 1876p resolution?</Question>
            <Answer>In order to get stable FPS most games frequently use dynamic resolution, which changes resolution
                from scene to scene. Because some scenes have quite a lot objects to render. We didn't want to show
                minimum and maximum resolution. Instead we decided to show average resolution, which you can understand
                from the tilde sign(~).</Answer>
            <Question>Are these resolution values native resolution or upscaled resolution?</Question>
            <Answer>Most of them are native resolution. However, in some games we couldn't be certain whether the
                resolution is native or upscaled. Unfortunately it is so hard to find proper value for each
                game.</Answer>
            <Question>My game offers me different graphic options rather than performance & quality. How can i
                understand which one is which?</Question>
            <Answer>There is no naming standard for options. Nearly every game named differently. So we decided to
                simplify it. Basically if the option offers more FPS, it is equivalent "Performance" to our website. If
                it offers more resolution, then it is "Quality" option for us.</Answer>
            <Question>How many people contributed to the project?</Question>
            <Answer>My sister designed, I programmed and added the games and my friend helped me set up production
                environment. So three people.</Answer>
            <Question>Do you keep any data from mine like IP?</Question>
            <Answer>No we do not. Giraffe's Neck is not interested in any of your personal information. You can always
                investigate <a href="https://github.com/Mert1745/how-many-fps">the source code</a> if you have
                doubts.</Answer>
        </Wrapper>
    );
}

export default FAQ;
