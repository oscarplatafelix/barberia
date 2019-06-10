import React from 'react';
import ItemsTopSlider from '../Componentes/ItemsTopSlider'
const sections = [
    {
        name: "Bienvenido",
        title1: "Cabello & Barba",
        title2: (<span>Bienvenido a la Barberia <br /> MyBarberia</span>),
        labelbottom: "NovaCode",
        img: "upload/slider_02.jpg"
    },
    {
        name: "Concepto",
        title1: "Estilo de vida saludable",
        title2: "Elegante Barba Afeitada",
        labelbottom: "NovaCode",
        img: "upload/slider_01.jpg"
    },
    {
        name: "Vision Mision",
        title1: "Clientes Felices",
        title2: "Lograr el estilo de tus sueños",
        labelbottom: "NovaCode",
        img: "upload/slider_03.jpg"
    }
];
class TopSlider extends React.Component {
    render() {
        return(
           <div className="first-slider">
                <div id="rev_slider_206_1_wrapper" 
                    className="rev_slider_wrapper fullscreen-container" 
                    data-alias="creative-freedom"
                    style={{backgroundColor:'#1E120E', padding:0}}>
                    <div id="rev_slider_206_1" className="rev_slider fullscreenbanner" style={{display:'none'}} data-version="5.1.1RC">
                        <ul>
                            <ItemsTopSlider sections={sections} speed={1000} timeStart={500}/>
                        </ul>
                    <div className="tp-bannertimer tp-bottom" style={{}}></div>
                </div>
            </div>
        </div>
        );
    }
};
export default TopSlider;