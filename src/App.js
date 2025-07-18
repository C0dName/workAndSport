import React from 'react';
import Header from "./components/Head/Header";
import Services from "./components/Main/Services";
import GlobalInfo from "./components/Main/GlobalInfo";
import RussiaMap from "./components/Main/RussiaMap";
import Project from "./components/Main/Project";
import Choose from "./components/Main/Сhoose";
import ContactGlobal from "./components/Main/ContactGlobal";
import Futter from "./components/Futter/Futter";


function App() {
  return (
    <div>

      <Header/>
        <Services/>
        <GlobalInfo/>
        <RussiaMap/>
        <Project/>
        <Choose/>
        <ContactGlobal/>
        <Futter/>




    </div>
  );
}

export default App;
