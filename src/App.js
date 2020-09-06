import React from 'react';
import './App.css';

import Mynavbar from  './components/ui/Navbar'
import MyCarousal from "./components/pages/carousal/Carousal"
import TitleMsg from "./components/pages/title-carousal/title"
import Footer from "./components/pages/footer/footer"

const App = () => {
  return (
    
    <div className="App">
      <MyCarousal/>
      <Mynavbar/>
      <TitleMsg></TitleMsg>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
