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
      categories: [" ", "Week 1", "", "Week 2", "","Week 3", "", "Week 4"],
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
      // text: "Activities",
      align: "left",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        fontStyle: "Montserrat",
        color: "blue",
      },
    },
  };




  return (
    <div className="pr-5 " style={{width:"99%"}}>
      <div className="bg-white  rounded-3xl mt-4 p-5">
        <ApexCharts
          options={lineGraph}
          series={lineGraph.series}
          type="line"
          height={300}
        />
      </div>
      <PieCharts />
    </div>
  );
}

export default Charts;