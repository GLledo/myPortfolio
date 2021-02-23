import React from 'react';

import './App.css';

import Container from "react-bootstrap/Container";
import Slide from "react-reveal/Slide";

import Mynavbar from  './components/ui/Navbar'
import MyCarousal from "./components/pages/carousal/Carousal"
import TitleMsg from "./components/pages/title-carousal/title"
import Footer from "./components/pages/footer/footer"
import Skills from "./components/pages/skills/skills";
import About from "./components/pages/about/about"
import Objective from "./components/pages/objective/objective"

const App = () => {
  return (
    
    <div className="App">
      <MyCarousal/>
      <Mynavbar/>
      <TitleMsg></TitleMsg>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills/>
        </Slide>
        <Objective></Objective>
      </Container>
      <About></About>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
