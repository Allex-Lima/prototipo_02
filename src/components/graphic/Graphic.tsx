import { useState, useEffect, useRef } from "react";
import { Chart } from "primereact/chart";
import { Button } from "primereact/button";
import axios from "axios";

export default function Graphic() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const chartRef = useRef<Chart | null>(null);
  useEffect(() => {

    const data = {
      labels: ["JAN", "FEV", "MAR", "ABR"],
      datasets: [
        {
          label: "Valor Bruto",
          data: [540, 330, 6000, 7000],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)'
          ],

          borderWidth: 1,
        },
        
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  // Função para converter o gráfico me base64
  const convertToBase64 = () => {

    const chartCanvas = chartRef.current?.getCanvas();
    const base64img = chartCanvas?.toDataURL('image/png');
    console.log(base64img);

    /* axios.post('http://localhost:5173/grafico', {data: base64img})
      .then(res => {
        console.log('Gráfico enviado com sucesso', res.data);
        
      })
      .catch(error => {
        console.error('Erro ao enviar o gráfico', error);
        
      });   */  
  }

  return (
    <div
      className="surface-50	flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Chart
        ref={chartRef}
        type="bar"
        data={chartData}
        options={chartOptions}
        className="w-8"
      />
      <Button label="Base64" onClick={convertToBase64}></Button>
    </div>
  );
}
