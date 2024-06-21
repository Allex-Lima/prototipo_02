import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export function Graphic() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Sales",
          data: [10, 50, 500, 1720],
          backgroundColor: ["rgb(75, 192, 192)"],
          borderColor: ["rgb(75, 192, 192)"],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="surface-50	flex justify-content-center align-items-center mb-2">
      <Chart
        className="w-5"
        type="bar"
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
}
