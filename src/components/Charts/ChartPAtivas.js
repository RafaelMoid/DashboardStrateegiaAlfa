import React from 'react';
import {Bar} from 'react-chartjs-2';

const ChartPAtivas = () => {
    return (
        <div>
            <Bar 
            data={{
                labels:['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4','Opção 5'],
                datasets:[
                    {
                        label: [],
                    data: [12,19,32,12,189],
                    barThickness: 18,
                    backgroundColor: [
                        '#125AB8',
                        '#7AB4DB',
                        '#A6CDE7',
                        '#DBEBF5',
                        '#DBEBF5'
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

export default ChartPAtivas;