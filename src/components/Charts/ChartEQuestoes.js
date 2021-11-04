import React from 'react';
import {Bar} from 'react-chartjs-2';
import "./chart.css";

const ChartEQuestoes = () => {
    return (
        <div className="chartWrapper">
            <Bar 
            data={{
                labels: ['', '', '', '', ''],
                datasets: [{
                    label: '',
                    data: [8, 19, 21, 21, 2],
                    barThickness: 18,
                    backgroundColor: [
                        '#125AB8',
                        '#7AB4DB',
                        '#A6CDE7',
                        '#DBEBF5',
                        '#DBEBF5'
                    ],
                    
                    borderWidth: 1
                }]
            }}
            options={{
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
                        grid: {
                            display: false
                            
                        }
                    }
                }
            }}

            height={150}
            width={100}

            />
            </div>
    )
};

export default ChartEQuestoes;
