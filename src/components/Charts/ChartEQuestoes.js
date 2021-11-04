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
                    data: [12, 19, 3, 5, 2],
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
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }}
            />
            </div>
    )
};

export default ChartEQuestoes;
