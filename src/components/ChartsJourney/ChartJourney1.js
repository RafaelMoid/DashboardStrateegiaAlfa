import React from 'react';
import {Bar} from 'react-chartjs-2';

import "./ChartJourney1.css";

const Progress = ({ done }) => (
        <div className="progress">
            <div className="progress-done" style={{
                opacity:1,
                width: `${done}%`
            }}>
                <p className="progressTxt">{done}%</p>
            </div>
        </div> 
);

const ChartJourney1 = () => {
    return (
           <>
           <h3 className="chartJourneyTitle1">Pessoas ativas na jornada</h3>
           <Progress done="70"/>
           <p className="chartJourneyP1">Total de participantes: 5</p>
           <p className="chartJourneyP2">Pessoas inativas: 2</p>
           </>
    )
};

export default ChartJourney1;