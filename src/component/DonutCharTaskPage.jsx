import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

function DonutChartTask({ task }) {
  const data = {
    labels: ["TODO", "INPROGRESS", "DONE"],
    datasets: [
      {
        data: [
          task.columns["column-1"].taskIds.length,
          task.columns["column-2"].taskIds.length,
          task.columns["column-3"].taskIds.length,
        ],
        backgroundColor: ["#FFAA9B", "#CFCFAB", "#75C9A8"],
        hoverOffset: 4,
        borderWidth: 2,
        cutout: "80%",
      },
    ],
  };
  return <Doughnut data={data} options={options} />;
}
export default DonutChartTask;
