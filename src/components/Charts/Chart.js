import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = () => {
    return (
        <div>
            <Bar 
            data={{
                labels:['Opção 1', 'Opção 2'],
                datasets:[
                    {
                        label: [],
                    data: [12,19],
                    barThickness: 18,
                    backgroundColor: [
                        '#FE6E9F',
                        '#393EA0'
                    ]
                },
            ],
            }}
            height={120}
            width={107}
            options={{
                maintainAspectRatio: false
            }}
            />
        </div>
    )
};

export default BarChart;