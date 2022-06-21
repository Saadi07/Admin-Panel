import React, { useRef } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { faker } from "@faker-js/faker";
//Line chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
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
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Total Buy",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Total Sell",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
//Doughnut chart
const doughnutData = {
  backgroundColor: ["rgb(2,88,255)", "rgb(249,151,0)", "rgb(255,99,0)"],
  labels: ["Active Users", "Inactive Users", "Guests"],
  datasets: [
    {
      label: "Users Report",
      data: [300, 100, 250],
      backgroundColor: ["rgb(2,88,255)", "rgb(249,151,0)", "rgb(255,99,0)"],
      hoverOffset: 4,
    },
  ],
};

const doughnutOptions = {
  elements: {
    arc: {
      weigth: 0.5,
      borderWidth: 3,
    },
  },
  cutout: 150,
};

const Container = () => {
  return (
    <div className="flex flex-col">
      <div className=" flex justify-evenly space-x-8 p-6">
        <div className="outline-none appearance-none w-60 border-2 rounded-xl bg-white hover:outline-blue-300 hover:border-0">
          <card href="#" className="flex flex-col p-4 space-y-2 ">
            <span className="text-2xl font-semibold text-gray-600 ">3,503</span>
            <span className="text-gray-400 font-medium ">Daily Signups</span>
          </card>
        </div>
        <div className="  outline-none appearance-none w-60 border-2 rounded-xl bg-white hover:outline-blue-300 hover:border-0">
          <card href="#" className="flex flex-col p-4 space-y-2">
            <span className="text-2xl font-semibold text-gray-600">79,088</span>
            <span className="text-gray-400 font-medium ">Daily Visitors</span>
          </card>
        </div>
        <div className="  outline-none appearance-none w-60 border-2 rounded-xl bg-white hover:outline-blue-300 hover:border-0">
          <card href="#" className="flex flex-col p-4 space-y-2">
            <span className="text-2xl font-semibold text-gray-600">15,503</span>
            <span className="text-gray-400 font-medium ">Daily Order</span>
          </card>
        </div>
        <div className="  outline-none appearance-none w-60 border-2 rounded-xl bg-white hover:outline-blue-300 hover:border-0">
          <card href="#" className="flex flex-col p-4 space-y-2">
            <span className="text-2xl font-semibold text-gray-600">
              Rs 108,550
            </span>
            <span className="text-gray-400 font-medium ">Daily Revenue</span>
          </card>
        </div>
      </div>

      <div className="flex justify-evenly space-x-8 p-6  overflow-hidden w-full">
        <div className=" w-3/5 py-3 px-5 text-gray-600 font-semibold text-xl border-2 rounded-lg">
          Sales Report
          <Line options={options} data={data} />
        </div>

        <div className="w-96 py-3 px-5 text-gray-600 font-semibold text-xl border-2 rounded-lg">
          Users Activity
          <Doughnut
            data={doughnutData}
            width={50}
            height={50}
            // options={doughnutOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
