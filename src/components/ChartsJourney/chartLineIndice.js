
import {Line} from 'react-chartjs-2';

const ChartLineIndice = () => {
    return (
        <div>
            <h3>Balanço índices no tempo</h3>
            <Line 
            data={{
                labels:['Opção 1'],
                datasets:[
                    {
                        label: [],
                    data: [12],
                    barThickness: 18,
                    backgroundColor: [
                        '#FE6E9F'
                    ]
                },
            ],
            }}
            height={5}
            width={5}
            options={{
                maintainAspectRatio: false
            }}
            />
        </div>
    )
}

export default ChartLineIndice;