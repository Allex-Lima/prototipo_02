import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function Graphic() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["JAN", "FEV", "MAR", "ABR"],
      datasets: [
        {
          label: "Valor Bruto",
          data: [540, 330, 6000, 7000],
          backgroundColor: "",

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

  return (
    <div
      className="surface-50	flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Chart
        type="Doughnut"
        data={chartData}
        options={chartOptions}
        className="w-8"
      />
    </div>
  );
}
