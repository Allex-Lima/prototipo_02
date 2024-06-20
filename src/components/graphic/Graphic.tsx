
import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function Graphic() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['JAN', 'FEV', 'MAR', 'ABR'],
            datasets: [
                {
                    label: 'Dados Mensais',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(143, 99, 71, 0.7)',
                        'rgba(143, 99, 178, 0.7)',
                        'rgba(60, 179, 113, 0.7)',
                        'rgba(255, 165, 0, 0.7)'
                      ],
                      borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                      ],
                      borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="surface-50	flex justify-content-center align-items-center" style={{ height: '100vh' }} >
            <Chart type="bar" data={chartData} options={chartOptions}  
            className="w-8" 
            />
        </div>
    )
}
        