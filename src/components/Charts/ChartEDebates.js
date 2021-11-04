import React from 'react';
import {Bar} from 'react-chartjs-2';
import "./chart.css";

const ChartEDebates = () => {
    return (
        <div className="chartWrapper">
            <Bar 
            data={{
                labels: ['', '', '', '', ''],
                datasets: [{
                    label: '',
                    data: [22, 19, 34, 5, 108],
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

export default ChartEDebates;