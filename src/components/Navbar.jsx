import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

const Logo = styled.img`
    height: 150px;

    @media only screen and (max-width: 768px) {
        height: 100px; /* Reduce size for smaller screens */
    }
`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

const ListItem = styled.li`
    cursor: pointer;
    font-size: 18px;

    @media only screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

const Navbar = ({ scrollToSection, homeRef, aboutRef, experienceRef, contactRef }) => {
  return (
    <Section>
      <Container>
        <Links>
            <Logo src="./img/logo.png" />
            <List>
                <ListItem onClick={() => scrollToSection(homeRef)}>Home</ListItem>
                <ListItem onClick={() => scrollToSection(aboutRef)}>About</ListItem>
                <ListItem onClick={() => scrollToSection(experienceRef)}>Experience</ListItem>
                <ListItem onClick={() => scrollToSection(contactRef)}>Contact</ListItem>
            </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
