import React from 'react'
import styled from 'styled-components'

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
`;

const Logo = styled.img`
    height: 150px;
`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Button = styled.button`
    // width: 100px;
    // padding: 10px;
    // background-color: #da4ea2;
    // color: white;
    // border: none;
    // border-radius: 5px;
    // cursor: pointer;
    width: 100px;
    padding: 8px 16px;
    background: linear-gradient(90deg, #ff6ec4, #f9a8d4);
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 14px; 
    font-weight: bold; 
    transition: all 0.3s ease; 
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2); 

    &:hover {
        background: linear-gradient(90deg, #e91e63, #ff6ec4); 
        transform: scale(1.05); 
        box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.3); 
    }

    &:active {
        transform: scale(0.98); 
    }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
            <Logo src = "./img/logo.png"/>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Studio</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>Contact</ListItem>
            </List>
        </Links>
        <Icons>
            <Icon src = "./img/search.png"/>
            <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
