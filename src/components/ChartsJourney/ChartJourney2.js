import React from 'react';
import {Bar} from 'react-chartjs-2';

import "./hChart.css";

const ChartJourney2 = () => {
    return (
        
        <div className="chartJourneyWrapper">
            <p className="charJourneytTitle">Pessoas</p>
            <Bar 
            data={{
                labels: ['', '', '', ''],
                datasets: [{
                    label: '',
                    data: [12, 19, 3, 5],
                    barThickness: 14,
                    backgroundColor: [
                        '#51C0A5',
                        '#51C0A58F',
                        '#51C0A54A',
                        '#51C0A51F'
                    ],


                    
                    borderWidth: 1,
                    datalabels: {
                        
                    }
                }]
            }}
            options={{
                
                indexAxis: 'y',
                plugins:{
                     
                    legend:{
                        display:false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            display: false
                        },
                        grid: {
                            display: false,
                            drawTicks:false,
                            drawOnChartArea: false
                            
                        }
                    },
                    x: {
                        ticks: {
                            display: false
                        },
                        grid: {
                            display: false,
                            
                            
                        }
                    }
                }
            }}

            height={60}
            width={220}

            />
            </div>
    )
};

export default ChartJourney2;