import React from 'react';
import {Bar} from 'react-chartjs-2';
import ChartJourHori from './chartJourneyHorizontal';
import Legend from './legendJourney.js';
import ChartLineIndice from './chartLineIndice.js';

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

const Progress2 = ({ done }) => (
    <div className="progress">
        <div className="progress-done2" style={{
            opacity:1,
            width: `${done}%`
        }}>
            <p className="progressTxt">{done}%</p>
        </div>
    </div> 
);

const Progress3 = ({ done }) => (
    <div className="progress">
        <div className="progress-done3" style={{
            opacity:1,
            width: `${done}%`
        }}>
            <p className="progressTxt">{done}%</p>
        </div>
    </div> 
);

const Progress4 = ({ done }) => (
    <div className="progress">
        <div className="progress-done4" style={{
            opacity:1,
            width: `${done}%`
        }}>
            <p className="progressTxt">{done}%</p>
        </div>
    </div> 
);

const ChartJourney1 = () => {
    return (

        <div className="chartJWrapper">
            <div className="leftData">   
               <div>
                   <h3 className="chartJourneyTitle1">Pessoas ativas na jornada</h3>
                   <Progress done="70"/>
                   <p className="chartJourneyP1">Total de participantes: 5</p>
                   <p className="chartJourneyP2">Pessoas inativas: 2</p>
               </div>
               <div>
                   <h3 className="chartJourneyTitle1">Pessoas ativas na jornada</h3>
                   <Progress2 done="40"/>
                   <p className="chartJourneyP1">Total de participantes: 5</p>
                   <p className="chartJourneyP2">Pessoas inativas: 2</p>
               </div>
               <div>
                   <h3 className="chartJourneyTitle1">Pessoas ativas na jornada</h3>
                   <Progress3 done="65"/>
                   <p className="chartJourneyP1">Total de participantes: 5</p>
                   <p className="chartJourneyP2">Pessoas inativas: 2</p>
               </div>
               <div>
                   <h3 className="chartJourneyTitle1">Pessoas ativas na jornada</h3>
                   <Progress4 done="23"/>
                   <p className="chartJourneyP1">Total de participantes: 5</p>
                   <p className="chartJourneyP2">Pessoas inativas: 2</p>
               </div>
            </div>
            <div className="rightData">
                <h3>Balanço índices</h3>
                <ChartJourHori/>
                <Legend/>
                <ChartLineIndice/>
            </div>
        </div>  
           
    )
};

export default ChartJourney1;