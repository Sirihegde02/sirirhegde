import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;

`;

const Right = styled.div`
    flex: 1;
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

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
        {/* 3d model */}
        </Left>
        <Right>
          <Title>What do I do?</Title>
          <WhatWeDo>
            <Line src = "./img/line.png"/>
            <Subtitle>I'm an aspiring Software Engineer</Subtitle>
          </WhatWeDo>
          <Desc>I've worked as an intern at companies including PennDOT and Sheetz. I also have research experience from Penn State University.</Desc>
          <Button>See My Work</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who
