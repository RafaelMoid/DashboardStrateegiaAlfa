
import {Line} from 'react-chartjs-2';

const ChartLineIndice = () => {
    return (
        <div>
            <h3>Balanço índices no tempo</h3>
            <Line 
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
            height={40}
            width={20}
            options={{
                maintainAspectRatio: false
            }}
            />
        </div>
    )
}

export default ChartLineIndice;