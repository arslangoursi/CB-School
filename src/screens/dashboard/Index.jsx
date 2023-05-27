import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import Breadcrumbs from "@components/Breadcrumbs";
import { Line } from "react-chartjs-2";
import React from "react";
import StatsFees from "@assets/StatsFees.svg";
import StatsStaff from "@assets/StatsStaff.svg";
import StatsStudents from "@assets/StatsStudents.svg";

export default function Dashboard() {
  return (
    <div className="container__dashboard">
      <div className="container__dashboard__main">
        <Breadcrumbs />
        <Stats />
        <StatsChat />
      </div>
      <div className="container__dashboard__sidebar"></div>
    </div>
  );
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let width, height, gradient;
function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(200, 0, 0, 200);
    gradient.addColorStop(0, "rgba(241, 58, 212, 1)");
    gradient.addColorStop(0.5, "rgba(255, 15, 45, 1)");
  }

  return gradient;
}

export const data = {
  labels,
  datasets: [
    {
      lineTension: 0.8,
      label: "This Year",
      data: [0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20],
      borderColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) {
          return;
        }
        return getGradient(ctx, chartArea);
      },
      borderWidth: 5,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Last Year",
      data: [0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20].reverse(),
      borderColor: "#ECECEC",
      backgroundColor: "#ECECEC",
    },
  ],
};

export function StatsChat() {
  return (
    <div className="container__dashboard__main__chart">
      <div className="container__dashboard__main__chart__left">
        <div className="container__dashboard__main__chart__left__heading">
          Revenue
        </div>
        <div className="container__dashboard__main__chart__left__legend">
          <div className="container__dashboard__main__chart__left__legend__icon" />
          This Year
        </div>
        <div className="container__dashboard__main__chart__left__legend">
          <div className="container__dashboard__main__chart__left__legend__icon" />
          Last Year
        </div>
      </div>
      <div className="container__dashboard__main__chart__right">
        <Line options={options} data={data} height={200} width={600} />
      </div>
    </div>
  );
}

function Stats({}) {
  const stats = [
    {
      name: "Total students",
      value: 2400,
      image: StatsStudents,
    },
    {
      name: "Total staff",
      value: 2400,
      image: StatsStaff,
    },
    {
      name: "Pending Fees",
      value: 2400,
      image: StatsFees,
    },
  ];
  return (
    <div className="container__dashboard__main__stats">
      {stats.map((stat) => (
        <div
          className="container__dashboard__main__stats__entry"
          style={{
            background: `url(${stat.image})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#5f60ed",
            backgroundPositionX: "calc(100% + 3rem)",
            backgroundPositionY: "5%",
          }}
        >
          <div className="container__dashboard__main__stats__entry__heading">
            {stat.name}
          </div>
          <div className="container__dashboard__main__stats__entry__value">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}
