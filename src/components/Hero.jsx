import React, { Suspense } from 'react';
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
      height: 200vh;
    }
`;

const Container = styled.div`
    height: 100%;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 768px) {
      flex: 1;
      align-items: center;
    }
`;

const Title = styled.h1`
    font-size: 50px;

    @media only screen and (max-width: 768px) {
      text-align: center;
    }
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

    @media only screen and (max-width: 768px) {
      padding: 20px;
      text-align: center;
    }
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

    @media only screen and (max-width: 768px) {
      flex: 1;
      width: 100%;
    }
`;

const Img = styled.img`
    width: 800px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @media only screen and (max-width: 768px) {
      width: 300px;
      height: 300px;
    }

    @keyframes animate {
      to {
        transform: translateY(20px);
      }
    }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Hey there! Welcome to my portfolio website!</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>My name is Siri Hegde.</Subtitle>
          </WhatWeDo>
          <Desc>
          I am a student at Penn State University majoring in Computer Science, with a minor in Mathematics.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/spaceman.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
