import React from 'react';
import "./legend.css";

import "./hChart.css";

const Legend = () => {
    return (
        
        <div className="legendWrapper">
           <div className="elementWrapper5">
                <div className="ball1"></div>
                <p className="text5">Pessoa ativas na jornada</p>
           </div>

           <div className="elementWrapper5">
                <div className="ball2"></div>
                <p className="text5">Engajamento nos debates</p>
           </div>

           <div className="elementWrapper5">
                <div className="ball3"></div>
                <p className="text5">Engajamento nas questões</p>
           </div>

           <div className="elementWrapper5">
                <div className="ball4"></div>
                <p className="text5">Engajamento nas divergencias</p>
           </div>
        </div>
    )
};

export default Legend;