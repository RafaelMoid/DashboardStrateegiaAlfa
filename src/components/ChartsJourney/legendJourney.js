import React from 'react';
import "./legendJourney.css";

import "./hChart.css";

const Legend = () => {
    return (
        
        <div className="legendWrapper2">
           <div className="legendWrapper3">
                <div className="elementWrapper5">
                     <div className="ball11"></div>
                     <p className="text6">Pessoa ativas na jornada</p>
                </div>
                <div className="elementWrapper5">
                     <div className="ball22"></div>
                     <p className="text6">Engajamento nos debates</p>
                </div>
           </div>

           <div className="legendWrapper3">
                <div className="elementWrapper5">
                     <div className="ball33"></div>
                     <p className="text6">Engajamento nas questões</p>
                </div>
                <div className="elementWrapper5">
                     <div className="ball44"></div>
                     <p className="text6">Engajamento nas divergencias</p>
                </div>
           </div>
        </div>
    )
};

export default Legend;