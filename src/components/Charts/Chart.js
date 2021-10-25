import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = () => {
    return (
        <div>
            <Bar 
            data={{
                labels:['Projeto 1', 'Projeto 2', 'Projeto 3', 'Projeto 4', 'Projeto 5'],
                datasets:[
                    {
                    label: '# of votes',
                    data: [12,19,3,5,2,3],
                    backgroundColor: [
                        '#FE6E9F',
                        '#393EA0',
                        '#186FBB',
                        '#6AC460',
                        '#FF8240'
                    ]
                },
            ],
            }}
            height={250}
            width={400}
            options={{
                maintainAspectRatio: false
            }}
            />
        </div>
    )
};

export default BarChart;