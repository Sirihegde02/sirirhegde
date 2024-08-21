import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  screwbar-width:none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  )
}


//TO DO:

//Navbar changes:
//When the page is viewed in half, then make the Navbar closer.
//Make the Navbar Navigate
//Change the Logo to look better
//Make an icon the icon for the tab
//Call the tab your name
//Replace the "Hire Me" button to have 4 buttons, one for email, one for github and one for linkedIn, and link them to those

//Hero changes:
//Say the page is under construction
//Turn the spaceman from facing right to facing left
//Change the "Learn More" button to "Say Hi", when clicked it should draft an email to me.

//Who changes:
//Headline "About Me"
//Maybe add a picture of yourself
//Personal Statement with background Information, What do I do outside of coding

//Works:
//

//Contact changes:
//Add subject to contact
//Add "Built and designed by Siri Hegde. All rights reserved. ©" at the bottom of the page.
//Hook the Send button on the Contact Me to my email inbox

//TO DO:
//I've finished the Hero.jsx, the Who and Works are only set up with no images.
//The Works needs fixing, the animation won't work
//The Contact page needs fixing, the map doesn't appear 
//Time: 43:00, with exceptions :)


//Write up github repo README like gazi

export default App;
