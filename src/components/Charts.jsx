import dynamic from "next/dynamic";
import PieCharts from "../components/PieCharts";
import { useEffect, useState } from "react";
import axios from "axios";
import {  RotateSpinner } from "react-spinners-kit";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
function Charts() {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://fake-json-server-api.onrender.com/activities")
      .then((response) => {
        setActivities(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const lineGraph = {
    chart: {
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    series: activities.map((activity) => ({
      name: activity.name,
      data: activity.data,
      color: activity.color,
    })),
    xaxis: {
      categories: ["", "Week 1", "Week 2", "Week 3", "Week 4"],
    },
    yaxis: {
      title: {
        text: "",
      },
    },
    stroke: {
      curve: "smooth",
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
  };

  return (
    <div className="pr-5 chart_container pt-6">
      <div className="bg-white rounded-3xl mt-4 p-5">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className=""
        >
          <div>
            <span
              className="ml-5"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              Activities
            </span>
            <br />
            <select
              className=" rounded  pl-4  pr-2 text-sm border-none"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              <option value="">May-June 2021</option>
              <option value="June 29, 2023">May-June 2021</option>
              <option value="June 30, 2023">June-July 2021</option>
            </select>
          </div>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <RotateSpinner />
          </div>
        ) : (
          <ApexCharts
            options={lineGraph}
            series={lineGraph.series}
            type="line"
            height={300}
          />
        )}
      </div>
      <PieCharts />
    </div>
  );
}

export default Charts;
