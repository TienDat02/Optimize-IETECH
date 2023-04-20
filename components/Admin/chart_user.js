import React, { useState, useEffect, useRef } from "react";
import { Chart } from "chart.js";

const chart_user = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/chart_admin/getChartUser");
      const data = await res.json();

      const chartData = data.map((user) => user.count); // Dữ liệu biểu đồ từ API
      const chartLabels = data.map((user) => user.month+ '/' + user.year); // Nhãn cho các giá trị trong biểu đồ từ API

      const chartConfig = {
        type: "bar",
        data: {
          labels: chartLabels,
          datasets: [
            {
              label: "Count user",
              data: chartData,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      };

      const myChart = new Chart(chartRef.current, chartConfig);

      return () => {
        myChart.destroy();
      };
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="mx-auto mt-14 w-[150px] text-xl font-semibold capitalize ">
        USER CHART
      </h1>
      <div className="mx-auto my-auto flex w-[1100px] bg-slate-50">
        <div className="my-auto h-fit w-full rounded-xl  border border-gray-400 pt-0  shadow-xl">
          <canvas ref={chartRef} />
        </div>
      </div>
    </div>
  );
};
export default chart_user;