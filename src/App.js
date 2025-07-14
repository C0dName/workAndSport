import React from 'react';
import Header from "./components/Head/Header";
import Services from "./components/Main/Services";
import GlobalInfo from "./components/Main/GlobalInfo";
import RussiaMap from "./components/Main/RussiaMap";
import Project from "./components/Main/Project";


function App() {
  return (
    <div>

      <Header/>
        <Services/>
        <GlobalInfo/>
        <RussiaMap/>
        <Project/>




    </div>
  );
}

export default App;
