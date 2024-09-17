"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function OrdersChart({ items }) {
  const data = {
    labels: items?.map((item) => item?.date),
    datasets: [
      {
        label: "Orders",
        data: items?.map((item) => item?.data?.totalOrders),
        backgroundColor: "#879fff20",
        borderColor: "#879fff80",
        borderWidth: 0.5,
        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Order Bar Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="bg-white p-5 rounded-xl shadow w-full h-[430px]">
      <Bar data={data} options={options} />
    </section>
  );
}
