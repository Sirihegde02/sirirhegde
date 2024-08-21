import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"
import styled from 'styled-components'
import React from 'react'

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
`

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
//I've finished the Hero.jsx, the Who and Works are only set up with no images.
//The Works needs fixing, the animation won't work
//The Contact page needs fixing, the map doesn't appear 
//Time: 43:00, with exceptions :)


export default App
