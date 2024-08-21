import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const Title = styled.h1`
    font-size: 40px;
`;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Line = styled.img`
    height: 5px;

`;

const Subtitle = styled.h2`
    color: #da4ea2;
`;

const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
`;

const Button = styled.button`
    // background-color: #da4ea2;
    // color: white;
    // font-weight: 500;
    // width: 100px;
    // padding: 10px;
    // border: none;
    // border-radius: 5px;
    // cursor: pointer;
    width: 140px; /* Increased width to fit "Learn More" on one line */
    padding: 8px 16px; /* Adjusted padding for balance */
    background: linear-gradient(90deg, #ff6ec4, #f9a8d4); /* Matching pink gradient */
    color: white;
    border: none;
    border-radius: 30px; /* Rounded corners for a modern look */
    cursor: pointer;
    font-size: 14px; /* Appropriate font size */
    font-weight: bold; /* Bold text */
    text-align: center; /* Center align text */
    transition: all 0.3s ease; /* Smooth transition for hover effect */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */

    &:hover {
        background: linear-gradient(90deg, #e91e63, #ff6ec4); /* Matching hover gradient */
        transform: scale(1.05); /* Slightly increase size on hover */
        box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
    }

    &:active {
        transform: scale(0.98); /* Slightly reduce size on click */
    }
`;

const Right = styled.div`
    flex: 3;
    position: relative;
`;

const Img = styled.img`
    width: 600px;
    height; 600px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate{
    to{
    transform: translateY(29px);
    }
    }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Hi I'm Siri, and welcome to my portfolio website!</Title>
          <WhatWeDo>
            <Line src = "./img/line.png"/>
            <Subtitle>Who am I</Subtitle>
          </WhatWeDo>
          <Desc>I am a student at Penn State University majoring in Computer Science, with a minor in Mathematics.</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/* 3d model */}
          <Img src = "/img/spaceman.png"/>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero
