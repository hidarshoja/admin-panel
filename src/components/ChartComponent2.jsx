

import { useState ,useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const salesData = [
  { month: "", sales: 2000000 },
  { month: "", sales: 1000000 },
  { month: "", sales: 2000000 },
  { month: "", sales: 200000 },
  { month: "", sales: 1800000 },
  { month: "", sales: 500000 },
];

export default function ChartComponent() {
  const [dataFetch , setDataFetch] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      setDataFetch(response.data);
      console.log("مقدار  چارت" , response.data);
      //dataFetch = response.data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const data = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: "POS",
        data: salesData.map((data) => data.sales),
        borderColor: "#663388",
        borderWidth: 3,
        pointBorderColor: "#FF0099",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#FFF");
          gradient.addColorStop(1, "white");
          return gradient;
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 15,
            family: 'vazir'
          },
        },
      },
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 12,
            weight: "bold",
            family: "vazir",
          },
        },
        title: {
          display: true,
          text: "",
          padding: {
            bottom: 10,
          },
          font: {
            size: 14,
            family: "vazir",
          },
        },
        min: 50,
      },
      x: {
        ticks: {
          font: {
            size: 12,
            weight: "bold",
            family: "vazir",
          },
        },
        title: {
          display: true,
          text: "",
          padding: {
            top: 10,
          },
          font: {
            size: 14,
            family: "vazir",
          },
        },
      },
    },
  };
  const containerStyle = {
    width: "100%", // Set the width to 100%
    height: "100%",
    padding: "20px",
    cursor: "pointer",
  };

  return (
    <>
       <div className="w-full flex flex-col">
        <h1 className="font-bold text-lg text-color1 text-center mt-10">
          نمودار  براساس POS
        </h1>
       
      </div>
    <div className="w-full min-h-[180px] md:min-h-96  flex flex-col md:flex-row gap-5 items-center justify-between">
      
   

      <div className="w-full">
        <Line data={data} options={options} style={containerStyle}></Line>
      </div>
    </div>
    </>
  );
}
