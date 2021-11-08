import React from 'react';
import "./legend.css";

import "./hChart.css";

const Legend = () => {
    return (
        
        <div className="legendWrapper">
           <div className="elementWrapper">
                <div className="ball1"></div>
                <p className="text">Pessoa ativas na jornada</p>
           </div>

           <div className="elementWrapper">
                <div className="ball2"></div>
                <p className="text">Engajamento nos debates</p>
           </div>

           <div className="elementWrapper">
                <div className="ball3"></div>
                <p className="text">Engajamento nas questões</p>
           </div>

           <div className="elementWrapper">
                <div className="ball4"></div>
                <p className="text">Engajamento nas divergencias</p>
           </div>
        </div>
    )
};

export default Legend;