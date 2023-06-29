import dynamic from "next/dynamic";
import PieCharts from "./PieCharts";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
function Charts() {
  const lineGraph = {
    chart: {
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: "linear",
        speed: 1000,
        animateGradually: {
          enabled: true,
          delay: 500,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 1000,
        },
      },
    },
    series: [
      {
        name: "Guest",
        data: [200, 300, 390, 300, 205, 300, 220, 300, 400, 440],
        color: "#ff8080",
      },
      {
        name: "User",
        data: [100, 200, 300, 400, 420, 400, 300, 200, 170, 200],
        color: "#ccff99",
      },
    ],
    xaxis: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
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

    title: {
      text: "Activities",
      align: "left",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        fontStyle: "Montserrat",
        color: "#333",
      },
    },
  };




  return (
    <div className="pr-6">
      <div className="bg-white  rounded-2xl mt-4 p-6">
        <ApexCharts
          options={lineGraph}
          series={lineGraph.series}
          type="line"
          height={200}
         // width={1000}
        />
      </div>
      <PieCharts />
    </div>
  );
}

export default Charts;
