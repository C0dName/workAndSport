import React from 'react';
import { useEffect, useRef } from 'react';
import Header from "./components/Head/Header";
import Services from "./components/Main/Services";
import GlobalInfo from "./components/Main/GlobalInfo";
import RussiaMap from "./components/Main/RussiaMap";
import Project from "./components/Main/Project";
import Choose from "./components/Main/Сhoose";
import ContactGlobal from "./components/Main/ContactGlobal";
import Footer from "./components/Footer/Footer";
import "./App.css"


function App() {
    const appRef = useRef(null);

    useEffect(() => {
        const app = appRef.current;
        if (!app) return;

        // Фиксируем высоту
        app.style.height = '4400px';
        app.style.overflowY = 'hidden';

        // Опционально: блокируем скролл колесом мыши
        const handleWheel = (e) => {
            if (window.scrollY >= 4400 - window.innerHeight) {
                e.preventDefault();
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);
  return (
      <div ref={appRef} style={{overflowX: "hidden"}}>
          <Header/>
          <Services/>
          <GlobalInfo/>
          <RussiaMap/>
          <div className="GradientBlock1">
              <div className="radialGradientPosition"></div>
          </div>
          <Project/>
          <Choose/>
          <ContactGlobal/>
          <div style={{height:'80px',
          display: "flex",
          position: "relative"}}>
              <div className="radialGradient2"></div>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
