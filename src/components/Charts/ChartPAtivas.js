import React from 'react';
import {Bar} from 'react-chartjs-2';

const ChartPAtivas = () => {
    return (
        <div>
            <Bar 
            data={{
                labels:['','','','',''],
                datasets:[
                    {
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
            height={150}
            width={170}
            
            />
        </div>
    )
};

export default ChartPAtivas;