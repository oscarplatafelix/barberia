/* eslint-disable react/style-prop-object */
import React from 'react';
import { Lines } from 'react-preloaders';
import './App.css';
import Header from './Secciones/Header';
import TopSlider from './Secciones/TopSlider';
import Nosotros from './Secciones/Nosotros';
import Servicios from './Secciones/Servicios';
import Precios from './Secciones/Precios';
import Footer from './Secciones/Footer';
function App() {
  return (
    <div>
      <React.Fragment>
        <Lines
          color={'#f7f7f7'} //Default #2D2D2D
          bgColor={'#222'} //Default #F7F7F7
        />
      </React.Fragment>
      <div className="App wrapper">
          <Header />
          <TopSlider/>
          <Nosotros/>
          <Servicios/>
          <Precios/>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
